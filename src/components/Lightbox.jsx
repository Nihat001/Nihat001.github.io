import { useEffect } from 'react';

function Lightbox({ screenshot, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('modal-open');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={screenshot.caption}>
      <button className="lightbox-backdrop" type="button" aria-label="Close screenshot preview" onClick={onClose} />
      <div className="lightbox-content">
        <button className="lightbox-close" type="button" onClick={onClose}>
          Close
        </button>
        <img src={screenshot.src} alt={screenshot.alt} />
        <p>{screenshot.caption}</p>
      </div>
    </div>
  );
}

export default Lightbox;
