import { services } from '../data/portfolio.js';

function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Practical support for web applications</h2>
        <p>
          Focused development help for clients who need clear communication, careful debugging, and maintainable
          improvements.
        </p>
      </div>
      <div className="card-grid service-grid">
        {services.map((service) => (
          <article className="card service-card" key={service.title}>
            <span className="service-marker" aria-hidden="true" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
