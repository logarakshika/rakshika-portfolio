import { useEffect, useState } from "react";

const CHARACTER_IMAGE = "/images/intro-character.png";
const HERO_IMAGE = "/profile-suit.png";

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    let loadHandled = false;

    const handleLoad = () => {
      if (loadHandled) return;
      loadHandled = true;

      if (!image.naturalWidth) {
        reject(new Error(`Image has no usable dimensions: ${src}`));
        return;
      }

      let decoded;
      try {
        decoded =
          typeof image.decode === "function"
            ? image.decode()
            : Promise.resolve();
      } catch (error) {
        reject(error);
        return;
      }
      decoded.then(resolve, reject);
    };

    const handleError = () => {
      if (loadHandled) return;
      loadHandled = true;
      reject(new Error(`Unable to load image: ${src}`));
    };

    image.onload = handleLoad;
    image.onerror = handleError;
    image.src = src;

    if (image.complete) {
      if (image.naturalWidth) handleLoad();
      else handleError();
    }
  });
}

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const ready = {
      app: false,
      character: false,
      homepage: false,
    };

    const publishProgress = () => {
      const value =
        (ready.app ? 20 : 0) +
        (ready.character ? 55 : 0) +
        (ready.homepage ? 25 : 0);
      setProgress(value);
    };

    ready.app = true;
    publishProgress();

    Promise.all([
      preloadImage(CHARACTER_IMAGE).then(() => {
        if (cancelled) return;
        ready.character = true;
        publishProgress();
      }),
      preloadImage(HERO_IMAGE).then(() => {
        if (cancelled) return;
        ready.homepage = true;
        publishProgress();
      }),
    ])
      .then(() => {
        if (cancelled) return;
        setProgress(100);

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          onComplete();
          return;
        }

        setIsExiting(true);
      })
      .catch((error) => {
        if (cancelled) return;
        console.error("Intro asset failed to load; skipping the intro.", error);
        onComplete();
      });

    return () => {
      cancelled = true;
    };
  }, [onComplete]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const finishIfReduced = () => {
      if (reducedMotion.matches && isExiting) onComplete();
    };

    reducedMotion.addEventListener("change", finishIfReduced);
    return () => {
      reducedMotion.removeEventListener("change", finishIfReduced);
    };
  }, [isExiting, onComplete]);

  const handleAnimationEnd = (event) => {
    if (
      isExiting &&
      event.target === event.currentTarget &&
      event.animationName === "intro-background-exit"
    ) {
      onComplete();
    }
  };

  return (
    <div
      className={`intro-loader${isExiting ? " intro-loader--exiting" : ""}`}
      onAnimationEnd={handleAnimationEnd}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="intro-content">
        <div className="intro-character-wrap">
          <img
            className="intro-character"
            src={CHARACTER_IMAGE}
            alt=""
            fetchPriority="high"
            draggable="false"
          />
        </div>

        <p className="intro-name">LOGARAKSHIKA&apos;S</p>
        <h1 className="intro-title">PORTFOLIO</h1>
        <p className="intro-tagline">
          DATA ANALYTICS <span aria-hidden="true">|</span> BUSINESS
          INTELLIGENCE <span aria-hidden="true">|</span> TECHNOLOGY
        </p>

        <div className="intro-progress">
          <div
            className="intro-progress-track"
            role="progressbar"
            aria-label="Portfolio loading progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <span style={{ width: `${progress}%` }} />
          </div>
          <p className="intro-progress-value" aria-live="polite">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
