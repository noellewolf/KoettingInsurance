import { useEffect, useLayoutEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Brand } from './components/Header';
import Header from './components/Header';
import Icon from './components/Icon';
import { agency } from './data';

function RouteEffects() {
  const { pathname, hash } = useLocation();
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';

  const metadata =
    normalizedPath === '/billing-claims'
      ? {
          title: 'Claims & Billing | Koetting Insurance',
          description:
            'Find claims and billing contact information for Koetting Insurance and Resource Agency in Germantown, Illinois.',
        }
      : normalizedPath === '/privacy'
        ? {
            title: 'Privacy Policy | Koetting Insurance',
            description: 'Read the privacy policy for Koetting Insurance and Resource Agency.',
          }
        : normalizedPath === '/terms'
          ? {
              title: 'Terms of Use | Koetting Insurance',
              description: 'Read the terms of use for Koetting Insurance and Resource Agency.',
            }
          : normalizedPath === '/case-studies'
            ? {
                title: 'Coverage Conversations | Koetting Insurance',
                description:
                  'Explore practical coverage conversations from Koetting Insurance and Resource Agency.',
              }
            : normalizedPath === '/'
              ? {
                  title: 'Independent Insurance Agency in Germantown, IL | Koetting',
                  description:
                    'Koetting Insurance and Resource Agency helps families and businesses in Germantown, Illinois compare coverage with local, independent guidance.',
                }
              : {
                  title: 'Page Not Found | Koetting Insurance',
                  description: 'The requested Koetting Insurance page could not be found.',
                };

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
    document.title = metadata.title;

    const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta('name', 'description', metadata.description);
    setMeta('property', 'og:title', metadata.title);
    setMeta('property', 'og:description', metadata.description);
    setMeta(
      'property',
      'og:url',
      `${window.location.origin}${normalizedPath === '/' ? '/' : normalizedPath}`,
    );
    setMeta('name', 'twitter:title', metadata.title);
    setMeta('name', 'twitter:description', metadata.description);

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.href = `${window.location.origin}${normalizedPath === '/' ? '/' : normalizedPath}`;
    }
  }, [metadata.description, metadata.title, normalizedPath]);

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
            <span>Made by Noelle Wolf</span>
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
