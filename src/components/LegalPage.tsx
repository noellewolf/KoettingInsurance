import { Link } from 'react-router-dom';
import { agency } from '../data';

type LegalPageProps = { type: 'privacy' | 'terms' };

export default function LegalPage({ type }: LegalPageProps) {
  const isPrivacy = type === 'privacy';
  return (
    <main id="main" className="legal-page container">
      <div className="legal-intro">
        <p className="eyebrow">KOETTING INSURANCE</p>
        <h1>{isPrivacy ? 'Privacy policy' : 'Terms of use'}</h1>
        <p className="legal-effective">Effective October 7, 2026</p>
      </div>
      {isPrivacy ? <PrivacyContent /> : <TermsContent />}
      <div className="legal-contact">
        <strong>Questions?</strong>{' '}
        <a href={`mailto:${agency.email}`}>{agency.email}</a> or{' '}
        <a href={agency.phoneHref}>{agency.phone}</a>.
      </div>
      <Link className="inline-link legal-back-link" to="/">
        Back to the homepage <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}

function PrivacyContent() {
  return (
    <div className="legal-content">
      <p>Koetting Insurance and Resource Agency (“Koetting,” “we,” “us,” or “our”) respects your privacy. This policy explains how information is handled when you visit this website.</p>
      <h2>Information you provide</h2>
      <p>This website includes a quote and contact form that asks for information such as your name, email address, phone number, coverage interests, and message. In this prototype, the form is for demonstration only: submissions are not transmitted to Koetting, stored by us, or used to create an insurance request.</p>
      <p>If the form becomes connected to a real service, we will update this policy before using it to explain where submissions go, how they are used, and how long they are retained.</p>
      <h2>Information collected automatically</h2>
      <p>Our hosting provider or website tools may receive technical information such as your IP address, browser type, device, referring page, and pages visited. We currently do not use this prototype to sell personal information or to place advertising cookies. If we add analytics, advertising, chat, or other tracking tools, this policy will be updated and any required choices or notices will be provided.</p>
      <h2>How information may be used</h2>
      <p>Information may be used to operate and secure the website, respond to questions, evaluate coverage needs, communicate with you, and provide or administer insurance services. We may share information with service providers and insurance carriers when needed to provide a requested service, as required by law, or to protect our rights and users.</p>
      <h2>Insurance information</h2>
      <p>A website privacy policy is not a substitute for any privacy notice, authorization, or other disclosure required for insurance or financial information. Those notices may apply when you become a customer or provide information through another channel.</p>
      <h2>Security and retention</h2>
      <p>We use reasonable safeguards appropriate to the information and the purpose for which it is handled. No website or transmission is completely secure. We retain information only as long as reasonably needed for the purpose collected, our business records, and legal obligations.</p>
      <h2>Children and third-party links</h2>
      <p>This website is not directed to children under 13. We are not responsible for the privacy practices of carrier, map, payment, or other third-party websites linked from this site.</p>
      <h2>Changes</h2>
      <p>We may update this policy as our website or practices change. The effective date above will identify the latest version.</p>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="legal-content">
      <p>These terms govern your use of the Koetting Insurance and Resource Agency website. By using the website, you agree to these terms. If you do not agree, please do not use the website.</p>
      <h2>Information only</h2>
      <p>Website content is provided for general information and conversation-starting purposes. It is not insurance, legal, tax, financial, or other professional advice, and it does not replace the terms, conditions, exclusions, or endorsements of an insurance policy.</p>
      <h2>No coverage or quote is bound online</h2>
      <p>Nothing on this website is an offer to sell insurance or a binder, application, policy, certificate, or confirmation of coverage. Coverage is subject to underwriting, availability, eligibility, carrier approval, and the written policy documents. Contact Koetting directly to discuss your needs and confirm coverage.</p>
      <h2>Using the website</h2>
      <p>You agree to use this website lawfully and not to interfere with its operation, attempt unauthorized access, introduce malicious code, or use content to mislead others. We may change, suspend, or discontinue any part of the website without notice.</p>
      <h2>Content and trademarks</h2>
      <p>The website’s text, design, graphics, and other content belong to Koetting or its licensors unless noted otherwise. You may view the website for personal, noncommercial use. You may not copy, modify, distribute, or commercially exploit its content without permission.</p>
      <h2>Third-party websites</h2>
      <p>We may link to carrier, map, payment, or other third-party websites for convenience. Those sites are controlled by their respective owners, and their content, availability, terms, and privacy practices are their responsibility.</p>
      <h2>Disclaimers and limitation of liability</h2>
      <p>The website is provided on an “as available” basis. To the fullest extent permitted by law, Koetting disclaims warranties relating to accuracy, completeness, availability, and fitness for a particular purpose. Koetting will not be liable for indirect, incidental, special, or consequential losses arising from your use of the website, except where liability cannot be limited by law.</p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of Illinois, without regard to conflict of law principles. If a provision is unenforceable, the remaining provisions will remain in effect.</p>
      <h2>Changes</h2>
      <p>We may revise these terms as the website or our practices change. Continued use after an update means you accept the revised terms.</p>
    </div>
  );
}
