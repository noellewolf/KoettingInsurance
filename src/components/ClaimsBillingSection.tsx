import { carrierServices } from '../data';

export default function ClaimsBillingSection() {
  return (
    <section
      id="billing-claims"
      className="container billing-section"
      aria-labelledby="billing-title"
    >
      <div className="billing-intro">
        <p className="eyebrow">POLICYHOLDER RESOURCES</p>
        <h1 id="billing-title">Claims, billing &amp; account access.</h1>
        <p>
          When possible, call our office before reporting a claim so we can help you understand your
          options. For an urgent claim after hours, contact your insurance company directly. These
          links open each company’s website, where you can manage your account or pay your bill.
        </p>
      </div>
      <div className="carrier-grid">
        {carrierServices.map((carrier) => (
          <article className="carrier-card" key={carrier.name}>
            <div>
              <p className="eyebrow">{carrier.name}</p>
              <h3>Billing &amp; account management</h3>
              <p className="carrier-description">Manage your account or pay your bill.</p>
              {'phone' in carrier && (
                <p className="carrier-contact">
                  <span>Phone:</span>{' '}
                  <a href={`tel:+1${carrier.phone.replaceAll('-', '')}`}>{carrier.phone}</a>
                </p>
              )}
              {'contacts' in carrier && (
                <ul className="carrier-contacts">
                  {carrier.contacts.map((contact) => (
                    <li key={contact.label}>
                      <span>{contact.label}:</span> <a href={contact.href}>{contact.value}</a>
                    </li>
                  ))}
                </ul>
              )}
              {'address' in carrier && <p className="carrier-contact">{carrier.address}</p>}
            </div>
            <a className="carrier-link" href={carrier.url} target="_blank" rel="noreferrer">
              Visit {carrier.name}
              <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens a new tab)</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
