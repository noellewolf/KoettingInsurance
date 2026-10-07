import { useEffect, useRef } from 'react';
import Icon from './components/Icon';
import Neighborhood from './components/Neighborhood';
import QuoteForm from './components/QuoteForm';
import { agency, coverages } from './data';
import { Link } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function ValuesMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstGroup = track?.firstElementChild as HTMLElement | null;
    if (!track || !firstGroup) return;
    const marqueeTrack = track;
    const marqueeGroup = firstGroup;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let lastTime = performance.now();
    let offset = 0;

    function animate(time: number) {
      const groupWidth = marqueeGroup.getBoundingClientRect().width;
      if (!reduceMotion.matches && groupWidth > 0) {
        offset = (offset + ((time - lastTime) * 24) / 1000) % groupWidth;
        marqueeTrack.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }
      lastTime = time;
      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="values-marquee" aria-hidden="true">
      <div className="values-track" ref={trackRef}>
        {Array.from({ length: 6 }, (_, copy) => (
          <div className="values-group" key={copy}>
            <span>
              <Icon name="check" /> Multiple carriers. More options.
            </span>
            <span>
              <Icon name="check" /> Guidance you can understand.
            </span>
            <span>
              <Icon name="check" /> Support when you need it.
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <main id="main">
        <Analytics />
        <SpeedInsights />
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">YOUR LOCAL, INDEPENDENT INSURANCE AGENCY</p>
            <h1 id="hero-title">
              Life happens.
              <br />
              Let’s protect
              <br />
              <em>what matters.</em>
            </h1>
            <p className="hero-description">
              Your home. Your business. Your people. Get thoughtful coverage and a familiar face to
              turn to, right here in Germantown.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" to="/#quote">
                Find your coverage <Icon name="arrow" />
              </Link>
              <a className="call-link" href={agency.phoneHref}>
                <Icon name="phone" />
                <span>
                  Prefer a conversation?<strong>{agency.phone}</strong>
                </span>
              </a>
            </div>
            <p className="hero-footnote">
              <span aria-hidden="true">✳</span>Independent advice. Personal attention. Since 1983.
            </p>
          </div>
          <Neighborhood />
        </section>
        <div className="values-strip">
          <div className="values-strip-accessible sr-only">
            Multiple carriers. More options. Guidance you can understand. Support when you need it.
          </div>
          <ValuesMarquee />
        </div>
        <section
          id="coverage"
          className="container coverage-section"
          aria-labelledby="coverage-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">COVERAGE FOR YOUR CORNER OF THE WORLD</p>
              <h2 id="coverage-title">
                Big plans. Everyday life.
                <br />
                We’re here for both.
              </h2>
            </div>
            <p>Insurance should fit your life. Explore a few ways we can help you protect it.</p>
          </div>
          <div className="coverage-grid">
            {coverages.map((item, index) => (
              <article className="coverage-card" key={item.id}>
                <div className="card-top">
                  <Icon name={item.icon} />
                  <span>0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <small>{item.examples}</small>
                <Link to="/#quote" aria-label={`Ask about ${item.title} coverage`}>
                  Let’s explore <Icon name="arrow" />
                </Link>
              </article>
            ))}
          </div>
        </section>
        <section className="comparison-section container" aria-labelledby="comparison-title">
          <div className="comparison-intro">
            <p className="eyebrow">INDEPENDENT ADVICE, YOUR CHOICE</p>
            <h2 id="comparison-title">A clearer way to choose coverage.</h2>
            <p>
              Koetting works with multiple insurance carriers, so you can compare options with
              guidance from a local agent.
            </p>
          </div>
          <ol className="comparison-steps">
            <li>
              <span>01</span>
              <h3>Tell us what matters</h3>
              <p>Share what you want to protect and what questions you have.</p>
            </li>
            <li>
              <span>02</span>
              <h3>We compare carriers</h3>
              <p>Your agent reviews available coverage and price options from multiple carriers.</p>
            </li>
            <li>
              <span>03</span>
              <h3>You choose</h3>
              <p>Review the options with your agent and choose the coverage that fits.</p>
            </li>
          </ol>
        </section>
        <section id="about" className="about-section container" aria-labelledby="about-title">
          <div className="heritage-panel">
            <p className="eyebrow">GERMANTOWN, ILLINOIS</p>
            <span className="heritage-year">1983</span>
            <div className="heritage-rule" />
            <p>
              Where our story started.
              <br />
              Where our roots remain.
            </p>
            <span className="heritage-stamp">
              LOCAL ROOTS
              <br />
              <span aria-hidden="true" style={{ height: '1em' }}>
                ✳
              </span>
              <br />
              INDEPENDENT SPIRIT
            </span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">A LOCAL AGENCY. A LASTING RELATIONSHIP.</p>
            <h2 id="about-title">
              Good coverage starts
              <br />
              with knowing you.
            </h2>
            <p>
              Founded in 1983, Koetting Insurance and Resource Agency grew from helping neighbors
              protect their homes and vehicles to supporting local businesses, families, and their
              changing needs.
            </p>
            <p>
              As an independent agency, we work with multiple insurance companies. That means we can
              compare options and explain them clearly, with personal service that continues when
              you need help with a claim.
            </p>
            <Link className="inline-link" to="/#contact">
              Get to know your local agency <Icon name="arrow" />
            </Link>
          </div>
        </section>
        <QuoteForm />
        <section id="contact" className="container contact-section" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">REAL PEOPLE. RIGHT HERE.</p>
            <h2 id="contact-title">We’re just a call away.</h2>
            <p>Have a question? Let’s talk it through.</p>
          </div>
          <div className="contact-details">
            <div>
              <span className="eyebrow">CALL OR EMAIL</span>
              <a className="contact-phone" href={agency.phoneHref}>
                {agency.phone}
              </a>
              <a href={`mailto:${agency.email}`}>{agency.email}</a>
            </div>
            <div>
              <span className="eyebrow">FIND US IN GERMANTOWN</span>
              <address>
                {agency.street}
                <br />
                {agency.city}
                <br />
                <span>Mailing: {agency.mailing}</span>
              </address>
              <p className="office-hours-note">
                <strong>Office hours</strong>
                <br />
                {agency.officeHours}
              </p>
              <a
                className="inline-link"
                href="https://www.google.com/maps/search/?api=1&query=904+Mill+Street+Germantown+IL+62245"
                target="_blank"
                rel="noreferrer"
              >
                Get directions <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens a new tab)</span>
              </a>
            </div>
          </div>
          <div className="claims-help">
            <div>
              <p className="eyebrow">HERE WHEN YOU NEED US</p>
              <h3>Need to report a claim?</h3>
              <p>
                When possible, call our office first so we can help you understand your options. If
                you need to report an urgent claim after hours, use the carrier contact information
                on the claims page.
              </p>
            </div>
            <Link className="button button-dark" to="/billing-claims">
              Claims &amp; billing information <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
