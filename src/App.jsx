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
    <section
      id="services"
      className="section"
      aria-labelledby="services-title"
    >
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Services</p>
          <h2 id="services-title">
            One specialist, focused entirely on eBay
          </h2>
          <p className="muted">
            From account health to sales, you work with someone
            who knows the platform in depth.
          </p>
        </header>

        {/* Showcase Images */}
        <section
          className="showcase"
          aria-labelledby="showcase-title"
        >
          <header className="section-head showcase-heading">
            <p className="eyebrow">Overview</p>
            <h2 id="showcase-title">What I offer on eBay</h2>
            <p className="muted">
              Professional eBay support to help improve your
              account health, customer experience, and sales.
            </p>
          </header>

          <div className="showcase-grid">
            <figure className="showcase-item">
              <img
                src="/promo-overview.webp"
                width="1079"
                height="607"
                loading="lazy"
                decoding="async"
                alt="eBay virtual assistant services including consultancy, customer support, and account health management"
              />
            </figure>

            <figure className="showcase-item">
              <img
                src="/promo-defects.webp"
                width="1080"
                height="604"
                loading="lazy"
                decoding="async"
                alt="eBay account management services for late shipments, transaction defects, and negative feedback"
              />
            </figure>
          </div>
        </section>

        {/* Service Cards */}
        <div className="cards">
          {services.map((s, i) => (
            <article key={s.title} className="card">
              <span className="card-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>

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
    <section
      id="contact"
      className="section contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-card">
          <div>
            <p className="eyebrow eyebrow-light">
              Let’s fix your account
            </p>
            <h2 id="contact-title">
              Message me with your eBay issue
            </h2>
            <p className="muted-light">
              I’ll reply with clear next steps. No obligation to hire.
            </p>
          </div>

          <div className="contact-actions">
            {/* Email */}
            <a
              className="contact-link"
              href={`mailto:${site.email}`}
              aria-label={`Email Masood at ${site.email}`}
            >
              <span className="contact-icon email-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="m4 7 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="contact-details">
                <strong>Email</strong>
                <span>{site.email}</span>
              </span>
            </a>

            {/* WhatsApp */}
            <a
              className="contact-link"
              href="https://wa.me/923027848840"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Masood on WhatsApp"
            >
              <span className="contact-icon whatsapp-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2a9.9 9.9 0 0 0-8.47 15.03L2 22l5.12-1.34A9.96 9.96 0 1 0 12.04 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.04.8.81-2.96-.2-.31A8.2 8.2 0 1 1 12.04 20.2Zm4.5-6.15c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.56.13-.17.25-.64.81-.78.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.52.11-.11.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.08s.9 2.42 1.02 2.59c.13.17 1.77 2.7 4.28 3.78.6.26 1.07.42 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29Z" />
                </svg>
              </span>
              <span className="contact-details">
                <strong>WhatsApp</strong>
                <span>+92 302 7848840</span>
              </span>
            </a>

            {/* Fiverr */}
            <a
              className="contact-link"
              href={site.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Masood's Fiverr profile"
            >
              <span className="contact-icon fiverr-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM8 7h2V5.8c0-2.4 1.5-3.8 4-3.8h2v3h-1.5c-1 0-1.5.5-1.5 1.5V7h3v3h-3v8h3v3H7v-3h2v-8H6V7h2Z" />
                </svg>
              </span>
              <span className="contact-details">
                <strong>Fiverr</strong>
                <span>@Qasim Ijaz</span>
              </span>
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
          <a href={site.fiverr} target="_blank" rel="noopener noreferrer">Fiverr</a>
          <a href={`mailto:${site.email}`}>Email</a>
        </nav>
      </div>

         <small>
              Designed & Developed by{" "}
              <a
              href="https://wa.me/923008115288"
                target="_blank"
                rel="noopener noreferrer"
                className="developer-link"
                aria-label="Abdullah Badar Profile"
              >
                Abdullah Badar
              </a>
            </small>

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
