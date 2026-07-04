import { travelCaseStudy } from '../data/portfolio.js';
import ScreenshotGallery from './ScreenshotGallery.jsx';

function CaseStudySection() {
  return (
    <section id="travel-case-study" className="case-study-band">
      <div className="section-shell case-study">
        <div className="case-study-intro">
          <div className="section-heading">
            <p className="eyebrow">Case Study</p>
            <h2>{travelCaseStudy.title}</h2>
            <p className="case-subtitle">{travelCaseStudy.subtitle}</p>
          </div>
          <div className="case-copy">
            <p>{travelCaseStudy.intro}</p>
            <p className="private-notice">{travelCaseStudy.privateNotice}</p>
          </div>
        </div>

        <div className="metadata-grid" aria-label="Travel recommendation project metadata">
          {travelCaseStudy.metadata.map((item) => (
            <div className="metadata-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>

        <ScreenshotGallery screenshots={travelCaseStudy.screenshots} />
      </div>
    </section>
  );
}

export default CaseStudySection;
