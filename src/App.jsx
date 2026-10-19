import { useEffect, useState } from "react";
import { site, regions, services, steps, faqs, defectTypes,ser } from "./content.js";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#markets", label: "Markets" },
  { href: "#faq", label: "FAQ" },
];

/* ---------- Header ---------- */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container bar">
        <a href="#top" className="brand" aria-label="Masood, home">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span>Masood</span>
        </a>

        <nav id="primary-nav" aria-label="Primary" className={`nav ${open ? "is-open" : ""}`}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn btn-primary btn-sm" href="#contact">Book a consultation</a>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="pill">
            <span className="pill-dot" aria-hidden="true" />
            {site.availability}
          </p>
          <h1 id="hero-title">
            Your eBay account, <span className="grad">health and selling.</span>
          </h1>
          <p className="lead">{site.intro}</p>

          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">Book a consultation</a>
            <a className="btn btn-ghost" href="#services">Explore services</a>
          </div>
<br></br>
       <ul
  className="ser"
  aria-label="Markets served"
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    listStyle: "none",
    padding: 0,
    margin: 0,
  }}
>
  {ser.map((r) => (
    <li
      key={r.code}
      style={{
        padding: "6px 12px",
        backgroundColor: "#f3f4f6",
        border: "1px solid #e5e7eb",
        borderRadius: "6px",
        fontSize: "14px",
        color: "#374151",
      }}
    >
      {r.name}
    </li>
  ))}
</ul>
        </div>

        <figure className="hero-figure">
          <img
            src="/masood.webp"
            width="800"
            height="800"
            alt="Portrait of Masood, eBay account health specialist"
            fetchpriority="high"
          />
          <figcaption className="hero-badge">
            <strong>{site.name}</strong>
            <span>{site.title}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------- Trust strip ---------- */
function TrustStrip() {
  return (
    <section className="trust" aria-label="Focus areas">
      <div className="container trust-grid">
        {defectTypes.map((d) => (
          <div key={d} className="trust-item">
            <span className="check" aria-hidden="true">✓</span>
            <span>{d}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Services</p>
          <h2 id="services-title">One specialist, focused entirely on eBay</h2>
          <p className="muted">From account health to sales, you work with someone who knows the platform in depth.</p>
        </header>

        <div className="cards">
          {services.map((s, i) => (
            <article key={s.title} className="card">
              <span className="card-index" aria-hidden="true">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="check-list">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
function Process() {
  return (
    <section id="process" className="section section-alt" aria-labelledby="process-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">How we work</p>
          <h2 id="process-title">A simple process, from first message to a healthier account</h2>
        </header>

        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-num" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Markets ---------- */
function Markets() {
  return (
    <section id="markets" className="section" aria-labelledby="markets-title">
      <div className="container markets">
        <div>
          <p className="eyebrow">Global reach</p>
          <h2 id="markets-title">Clients across borders</h2>
          <p className="muted">
            I work with sellers and businesses directly and through Fiverr. Time zones are handled through clear
            written updates, so you always know where your case stands.
          </p>
        </div>
        <ul className="market-list">
          {regions.map((r) => (
            <li key={r.code}>
              <span className="code">{r.code}</span>
              <span>{r.name}</span>
            </li>
          ))}
          <li>
            <span className="code">🌍</span>
            <span>And more</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  return (
    <section id="faq" className="section section-alt" aria-labelledby="faq-title">
      <div className="container narrow">
        <header className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title">Questions, answered</h2>
        </header>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-card">
          <div>
            <p className="eyebrow eyebrow-light">Let’s fix your account</p>
            <h2 id="contact-title">Message me with your eBay issue</h2>
            <p className="muted-light">I’ll reply with clear next steps. No obligation to hire.</p>
          </div>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${site.email}`}>Email Masood</a>


<a
  className="btn btn-primary"
  href="https://wa.me/923027848840"
  target="_blank"
  rel="noopener noreferrer"
>
  Contact on WhatsApp
</a>
            <a className="btn btn-outline" href={site.fiverr} target="_blank" rel="noopener noreferrer">
              Find me on Fiverr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {site.name}. eBay account health and consultancy.</p>
        <p className="fine">
          I am an independent consultant and am not affiliated with eBay Inc. eBay is a trademark of eBay Inc.
          Outcomes depend on eBay’s review and policies.
        </p>
        <nav aria-label="Social">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={site.fiverr} target="_blank" rel="noopener noreferrer">Fiverr</a>
          <a href={`mailto:${site.email}`}>Email</a>
        </nav>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <Markets />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
