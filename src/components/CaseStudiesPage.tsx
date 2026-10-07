import { Link } from 'react-router-dom';

const studies = [
  {
    label: 'Illustrative conversation',
    title: 'A growing family reviews home and auto coverage',
    summary:
      'As a family’s needs change, an independent agent can help compare available options and explain what each policy is designed to protect.',
    focus: 'Homeowners · Auto · Umbrella',
  },
  {
    label: 'Illustrative conversation',
    title: 'A local business prepares for its next chapter',
    summary:
      'A business owner can use a coverage review to identify priorities, discuss liability and property needs, and understand the choices available from multiple carriers.',
    focus: 'Business · Liability · Property',
  },
  {
    label: 'Illustrative conversation',
    title: 'A household plans for the people who count on them',
    summary:
      'A personal conversation can make it easier to talk through life, health, and supplemental coverage questions with a familiar local advisor.',
    focus: 'Life · Health · Benefits',
  },
] as const;

export default function CaseStudiesPage() {
  return (
    <main id="main" className="case-studies-page container">
      <div className="case-studies-intro">
        <p className="eyebrow">COVERAGE CONVERSATIONS</p>
        <h1>Thoughtful coverage starts with your story.</h1>
        <p>
          Every household and business has different priorities. These illustrative examples show
          the kinds of conversations an independent local agency can help you have.
        </p>
      </div>
      <div className="case-studies-grid">
        {studies.map((study) => (
          <article className="case-study-card" key={study.title}>
            <p className="eyebrow">{study.label}</p>
            <h2>{study.title}</h2>
            <p>{study.summary}</p>
            <small>{study.focus}</small>
          </article>
        ))}
      </div>
      <div className="case-studies-cta">
        <div>
          <p className="eyebrow">YOUR NEXT CONVERSATION</p>
          <h2>Let’s talk through what matters to you.</h2>
        </div>
        <Link className="button button-dark" to="/#quote">
          Start with your coverage
        </Link>
      </div>
    </main>
  );
}
