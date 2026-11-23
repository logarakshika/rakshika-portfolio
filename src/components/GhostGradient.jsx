import { useEffect, useRef } from "react";

const vertexShaderSource = `
  attribute vec2 position;

  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;

  uniform vec2 resolution;
  uniform float time;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;

    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p = p * 2.03 + vec2(13.7, 9.2);
      amplitude *= 0.5;
    }

    return value;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    vec2 p = (uv - 0.5) * vec2(resolution.x / resolution.y, 1.0);

    vec2 drift = vec2(time * 0.16, -time * 0.1);
    vec2 warp = vec2(
      fbm(p * 1.15 + drift),
      fbm(p * 1.15 - drift + vec2(5.2, 1.3))
    );
    float field = fbm(p * 1.55 + warp * 1.8 + drift * 0.6);
    float light = smoothstep(0.4, 0.76, field);

    float streakField = p.x * 0.72 + p.y * 1.18 + warp.x * 0.28;
    float streaks = pow(
      max(0.0, 1.0 - abs(sin(streakField * 7.5 + field * 2.0))),
      18.0
    ) * smoothstep(0.48, 0.78, field);

    float shapes = smoothstep(-0.2, 0.5, p.x * 0.42 - p.y * 0.72 + warp.y * 0.16);
    vec3 lavender = vec3(0.82, 0.79, 0.91);
    vec3 peach = vec3(1.0, 0.74, 0.61);
    vec3 color = mix(vec3(0.94, 0.92, 0.98), lavender, 0.3 + shapes * 0.35);
    color = mix(color, peach, light * 0.58);
    color += vec3(0.08, 0.04, 0.04) * streaks;
    color *= 1.0 - smoothstep(0.42, 1.0, length(p)) * 0.08;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Unable to create the Ghost gradient shader.");

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(message || "Unable to compile the Ghost gradient shader.");
  }

  return shader;
}

export default function GhostGradient() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let gl;
    let program;
    let vertexBuffer;
    let vertexShader;
    let fragmentShader;
    let resolutionLocation;
    let timeLocation;
    let frameId = 0;
    let isInViewport = true;
    let isPageVisible = !document.hidden;
    let visibilityObserver;
    let startTime = performance.now();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const useFallback = (error) => {
      if (error) console.error("Ghost gradient WebGL initialization failed:", error);
      canvas.classList.add("ghost-gradient__canvas--hidden");
      canvas.parentElement?.classList.add("ghost-gradient--fallback");
    };

    const draw = (timestamp) => {
      if (!gl || !program) return;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (!width || !height) return;

      const maxDpr = window.innerWidth < 700 ? 1 : 1.5;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, maxDpr, 2048 / Math.max(width, height));
      const pixelWidth = Math.max(1, Math.floor(width * pixelRatio));
      const pixelHeight = Math.max(1, Math.floor(height * pixelRatio));

      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
        gl.viewport(0, 0, pixelWidth, pixelHeight);
      }

      gl.useProgram(program);
      gl.uniform2f(resolutionLocation, pixelWidth, pixelHeight);
      gl.uniform1f(
        timeLocation,
        reducedMotion.matches ? 0 : (timestamp - startTime) / 8000
      );
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    const stopAnimation = () => {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
    };

    const render = (timestamp) => {
      frameId = 0;
      draw(timestamp);
      scheduleRender();
    };

    const scheduleRender = () => {
      if (!frameId && !reducedMotion.matches && isInViewport && isPageVisible) {
        frameId = window.requestAnimationFrame(render);
      }
    };

    const handleMotionChange = () => {
      stopAnimation();
      startTime = performance.now();
      if (reducedMotion.matches) draw(startTime);
      else scheduleRender();
    };

    const handlePageVisibility = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible) {
        draw(performance.now());
        scheduleRender();
      } else {
        stopAnimation();
      }
    };

    const handleViewportChange = ([entry]) => {
      isInViewport = entry.isIntersecting;
      if (isInViewport) {
        draw(performance.now());
        scheduleRender();
      } else {
        stopAnimation();
      }
    };

    const handleResize = () => {
      draw(performance.now());
    };

    const handleContextLost = (event) => {
      event.preventDefault();
      stopAnimation();
      useFallback(new Error("The WebGL context was lost."));
    };

    try {
      gl = canvas.getContext("webgl", {
        alpha: false,
        antialias: false,
        powerPreference: "low-power",
      });

      if (!gl) {
        useFallback();
        return undefined;
      }

      vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
      fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
      program = gl.createProgram();
      if (!program) throw new Error("Unable to create the Ghost gradient program.");

      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program) || "Unable to link the Ghost gradient program.");
      }

      resolutionLocation = gl.getUniformLocation(program, "resolution");
      timeLocation = gl.getUniformLocation(program, "time");
      vertexBuffer = gl.createBuffer();
      if (!vertexBuffer) throw new Error("Unable to create the Ghost gradient buffer.");

      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW
      );

      const position = gl.getAttribLocation(program, "position");
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      canvas.addEventListener("webglcontextlost", handleContextLost);
      window.addEventListener("resize", handleResize);
      document.addEventListener("visibilitychange", handlePageVisibility);
      reducedMotion.addEventListener("change", handleMotionChange);

      if ("IntersectionObserver" in window) {
        visibilityObserver = new IntersectionObserver(handleViewportChange);
        visibilityObserver.observe(canvas);
      }

      if (reducedMotion.matches) {
        draw(startTime);
      } else {
        scheduleRender();
      }
    } catch (error) {
      useFallback(error);
    }

    return () => {
      stopAnimation();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handlePageVisibility);
      reducedMotion.removeEventListener("change", handleMotionChange);
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      visibilityObserver?.disconnect();

      if (gl) {
        if (vertexBuffer) gl.deleteBuffer(vertexBuffer);
        if (program) gl.deleteProgram(program);
        if (vertexShader) gl.deleteShader(vertexShader);
        if (fragmentShader) gl.deleteShader(fragmentShader);
      }
    };
  }, []);

  return (
    <div className="ghost-gradient" aria-hidden="true">
      <canvas ref={canvasRef} className="ghost-gradient__canvas" />
    </div>
  );
}
