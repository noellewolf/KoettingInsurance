export type QuoteRequest = {
  name: string;
  email: string;
  phone: string;
  coverage: string;
  message: string;
};

export type QuoteSubmissionResult = { mode: 'demo' } | { mode: 'api'; reference?: string };

const endpoint = import.meta.env.VITE_QUOTE_API_URL?.trim();

export const isQuoteApiEnabled = Boolean(endpoint);

export async function submitQuote(request: QuoteRequest): Promise<QuoteSubmissionResult> {
  if (!isQuoteApiEnabled || !endpoint) {
    return { mode: 'demo' };
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error('The quote request could not be submitted. Please call our office instead.');
  }

  const payload = (await response.json().catch(() => ({}))) as { reference?: string } | null;
  return { mode: 'api', reference: payload?.reference };
}
