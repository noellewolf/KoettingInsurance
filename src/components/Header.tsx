import { useState } from 'react';
import { Link } from 'react-router-dom';
import { agency } from '../data';
export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Koetting Insurance and Resource Agency, home">
      <img
        className="brand-logo"
        src="/koetting-logo.png"
        alt="Koetting Insurance and Resource Agency"
      />
    </Link>
  );
}
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="utility">
        <div className="container">
          <span>Rooted in Germantown. Serving Clinton County.</span>
          <a href={agency.phoneHref}>{agency.phone}</a>
        </div>
      </div>
      <header className="container header">
        <Brand />
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close menu' : 'Menu'} <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
        <nav id="main-nav" className={open ? 'nav is-open' : 'nav'} aria-label="Main navigation">
          <Link to="/#coverage" onClick={() => setOpen(false)}>
            Our coverage
          </Link>
          <Link to="/#about" onClick={() => setOpen(false)}>
            Our agency
          </Link>
          <Link to="/#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link to="/billing-claims" onClick={() => setOpen(false)}>
            Claims &amp; billing
          </Link>
          <Link className="button button-dark" to="/#quote" onClick={() => setOpen(false)}>
            Let’s talk coverage <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>
    </>
  );
}
