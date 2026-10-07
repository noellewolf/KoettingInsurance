import { useRef, useState, type FormEvent } from 'react';
import { coverages, sampleRequest } from '../data';
import Icon from './Icon';
import TeamSection from './TeamSection';
import { isQuoteApiEnabled, submitQuote } from '../lib/quoteApi';

export default function QuoteForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    coverage: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const confirmation = useRef<HTMLDivElement>(null);
  function update(key: keyof typeof values, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setStatus('idle');
    setErrorMessage('');
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      await submitQuote(values);
      setStatus('success');
      requestAnimationFrame(() => confirmation.current?.focus());
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please call our office.',
      );
    }
  }
  return (
    <>
      <section className="quote-section" id="quote" aria-labelledby="quote-title">
        <div className="container quote-layout">
          <div className="quote-intro">
            <p className="eyebrow">A GOOD PLACE TO START</p>
            <h2 id="quote-title">
              Let’s find your
              <br />
              peace of mind.
            </h2>
            <p>
              Tell us what you’re looking to protect. Our independent agency can help you compare
              options from multiple carriers.
            </p>
          </div>
          <form className="quote-form" onSubmit={submit}>
            <div className="form-heading">
              <h3>Start a conversation</h3>
              <button
                type="button"
                className="text-button"
                onClick={() => {
                  setValues({ ...sampleRequest });
                  setStatus('idle');
                  setErrorMessage('');
                }}
              >
                Use sample details <span aria-hidden="true">↗</span>
              </button>
            </div>
            <div className="field-grid">
              <label>
                Your name <span aria-hidden="true">*</span>
                <input
                  name="name"
                  autoComplete="off"
                  required
                  maxLength={100}
                  value={values.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Alex Sample"
                />
              </label>
              <label>
                Email address <span aria-hidden="true">*</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="off"
                  required
                  maxLength={254}
                  value={values.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="alex@example.com"
                />
              </label>
              <label>
                Phone <span className="optional">(optional)</span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="off"
                  maxLength={30}
                  value={values.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="618-555-0100"
                />
              </label>
              <label>
                What can we help protect? <span aria-hidden="true">*</span>
                <select
                  name="coverage"
                  required
                  value={values.coverage}
                  onChange={(e) => update('coverage', e.target.value)}
                >
                  <option value="">Choose coverage</option>
                  {coverages.map((item) => (
                    <option key={item.id}>{item.formValue}</option>
                  ))}
                  <option>Not sure yet</option>
                </select>
              </label>
            </div>
            <label>
              A little about what you need <span className="optional">(optional)</span>
              <textarea
                name="message"
                rows={3}
                maxLength={1500}
                value={values.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="I’d like to compare my current coverage…"
              />
            </label>
            <div className="form-bottom">
              <span>Required fields marked *</span>
              <button
                className="button button-dark"
                type="submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Start the conversation'}{' '}
                <Icon name="arrow" />
              </button>
            </div>
            {status === 'success' && (
              <div ref={confirmation} className="confirmation" role="status" tabIndex={-1}>
                <Icon name="check" />
                <div>
                  <strong>Thanks, {values.name.trim() || 'friend'}.</strong>
                  <p>
                    {isQuoteApiEnabled
                      ? 'Your request is on its way. We will be in touch soon.'
                      : `This demo did not send or save your details. For a real conversation, call (618) 523-4553.`}
                  </p>
                </div>
              </div>
            )}
            {status === 'error' && (
              <div className="confirmation" role="alert">
                <div>
                  <strong>We could not send that request.</strong>
                  <p>{errorMessage}</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
      <TeamSection />
    </>
  );
}
