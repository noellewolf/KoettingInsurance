import { useEffect, useLayoutEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Brand } from './components/Header';
import Header from './components/Header';
import Icon from './components/Icon';
import { agency } from './data';

function RouteEffects() {
  const { pathname, hash } = useLocation();
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  useEffect(() => {
    document.title =
      normalizedPath === '/billing-claims'
        ? 'Claims & Billing | Koetting Insurance'
        : normalizedPath === '/privacy'
          ? 'Privacy Policy | Koetting Insurance'
          : normalizedPath === '/terms'
            ? 'Terms of Use | Koetting Insurance'
        : normalizedPath === '/'
          ? 'Koetting | Insurance rooted in community'
          : 'Page Not Found | Koetting Insurance';
  }, [normalizedPath]);

  return null;
}

export default function SiteLayout() {
  return (
    <>
      <RouteEffects />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" />
      <Header />
      <Outlet />
      <footer>
        <div className="container footer-main">
          <Brand />
          <p>Local roots. Thoughtful protection.</p>
          <Link to="/#top">Back to top ↑</Link>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} {agency.name}
          </span>
          <span className="footer-legal-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <span>Local prototype made by Noelle Wolf</span>
          </span>
        </div>
      </footer>
      <a className="mobile-call-bar" href={agency.phoneHref}>
        <Icon name="phone" />
        <span>
          Call Koetting <strong>{agency.phone}</strong>
        </span>
      </a>
    </>
  );
}
