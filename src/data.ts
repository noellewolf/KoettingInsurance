export const agency = {
  name: 'Koetting Insurance and Resource Agency',
  phone: '(618) 523-4553', phoneHref: 'tel:+16185234553',
  email: 'contact@koettinginsurance.net',
  street: '904 Mill Street', city: 'Germantown, IL 62245', mailing: 'P.O. Box 283', founded: 1983,
};
export const coverages = [
  { id: 'personal', title: 'Home & auto', icon: 'home', description: 'For the place you call home and the roads that take you there.', examples: 'Homeowners · Auto · Renters', formValue: 'Home & auto' },
  { id: 'commercial', title: 'Business', icon: 'business', description: 'Protection for the business you’ve worked hard to build.', examples: 'Liability · Property · Workers comp', formValue: 'Business' },
  { id: 'life', title: 'Life & health', icon: 'heart', description: 'Care for yourself and the people who count on you.', examples: 'Life · Individual health · Group benefits', formValue: 'Life & health' },
  { id: 'specialty', title: 'A little more', icon: 'umbrella', description: 'Coverage for the extra parts of life that matter to you.', examples: 'Umbrella · Flood · Boat', formValue: 'Specialty coverage' },
] as const;
export const sampleRequest = { name: 'Alex Sample', email: 'alex@example.com', phone: '618-555-0100', coverage: 'Home & auto', message: 'Sample only: I would like to compare home and auto coverage.' };
