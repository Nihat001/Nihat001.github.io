import { useState } from 'react';
import Lightbox from './Lightbox.jsx';

const screenshotBasePath = '/projects/travel-recommendation/';

function ScreenshotCard({ screenshot, onOpen }) {
  const [hasError, setHasError] = useState(false);
  const src = `${screenshotBasePath}${screenshot.file}`;

  return (
    <figure className="screenshot-card">
      <button
        className="screenshot-trigger"
        type="button"
        onClick={() => {
          if (!hasError) {
            onOpen({ ...screenshot, src });
          }
        }}
        aria-label={`Open screenshot: ${screenshot.caption}`}
      >
        <span className="screenshot-frame">
          {hasError ? (
            <span className="screenshot-placeholder">Screenshot pending</span>
          ) : (
            <img
              src={src}
              alt={screenshot.alt}
              loading="lazy"
              onError={() => {
                setHasError(true);
              }}
            />
          )}
        </span>
      </button>
      <figcaption>
        <span>{screenshot.label}</span>
        {screenshot.caption}
      </figcaption>
    </figure>
  );
}

function ScreenshotGallery({ screenshots }) {
  const [activeScreenshot, setActiveScreenshot] = useState(null);

  return (
    <div className="gallery-block">
      <div className="gallery-heading">
        <p className="eyebrow">Product Flow</p>
        <h3>Interface gallery</h3>
      </div>
      <div className="screenshot-grid">
        {screenshots.map((screenshot) => (
          <ScreenshotCard screenshot={screenshot} key={screenshot.file} onOpen={setActiveScreenshot} />
        ))}
      </div>
      {activeScreenshot ? (
        <Lightbox screenshot={activeScreenshot} onClose={() => setActiveScreenshot(null)} />
      ) : null}
    </div>
  );
}

export default ScreenshotGallery;
