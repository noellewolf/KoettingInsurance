import { useState } from 'react';
import { agency } from '../data';
export function Brand() { return <a className="brand" href="#top" aria-label="Koetting Insurance, home"><span className="brand-mark">K</span><span><strong>Koetting</strong><small>INSURANCE & RESOURCE AGENCY</small></span></a>; }
export default function Header() {
  const [open, setOpen] = useState(false);
  return <><div className="utility"><div className="container"><span>Rooted in Germantown. Serving Clinton County.</span><a href={agency.phoneHref}>{agency.phone}</a></div></div><header className="container header"><Brand/><button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? 'Close menu' : 'Menu'} <span aria-hidden="true">{open ? '×' : '☰'}</span></button><nav id="main-nav" className={open ? 'nav is-open' : 'nav'} aria-label="Main navigation"><a href="#coverage" onClick={() => setOpen(false)}>Our coverage</a><a href="#about" onClick={() => setOpen(false)}>Our agency</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a><a className="button button-dark" href="#quote" onClick={() => setOpen(false)}>Let’s talk coverage <span aria-hidden="true">↗</span></a></nav></header></>;
}
