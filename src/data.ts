export const agency = {
  name: 'Koetting Insurance and Resource Agency',
  phone: '(618) 523-4553',
  phoneHref: 'tel:+16185234553',
  email: 'contact@koettinginsurance.net',
  officeHours: 'Monday–Friday, 8 a.m.–4 p.m.',
  street: '904 Mill Street',
  city: 'Germantown, IL 62245',
  mailing: 'P.O. Box 283',
  founded: 1983,
};
export const coverages = [
  {
    id: 'personal',
    title: 'Home & auto',
    icon: 'home',
    description: 'For the place you call home and the roads that take you there.',
    examples: 'Homeowners · Auto · Renters',
    formValue: 'Home & auto',
  },
  {
    id: 'commercial',
    title: 'Business',
    icon: 'business',
    description: 'Protection for the business you’ve worked hard to build.',
    examples: 'Liability · Property · Workers comp',
    formValue: 'Business',
  },
  {
    id: 'life',
    title: 'Life & health',
    icon: 'heart',
    description: 'Care for yourself and the people who count on you.',
    examples: 'Life · Individual health · Group benefits',
    formValue: 'Life & health',
  },
  {
    id: 'specialty',
    title: 'A little more',
    icon: 'umbrella',
    description: 'Coverage for the extra parts of life that matter to you.',
    examples: 'Umbrella · Flood · Boat',
    formValue: 'Specialty coverage',
  },
] as const;
export const sampleRequest = {
  name: 'Alex Sample',
  email: 'alex@example.com',
  phone: '618-555-0100',
  coverage: 'Home & auto',
  message: 'Sample only: I would like to compare home and auto coverage.',
};

export const carrierServices = [
  {
    name: 'Hanover Insurance',
    phone: '800-628-0250',
    url: 'https://www.hanover.com/',
  },
  {
    name: 'Travelers Insurance',
    phone: '800-252-4633',
    url: 'https://www.travelers.com/',
  },
  {
    name: 'American Modern Insurance',
    phone: '800-375-2075',
    url: 'https://www.amig.com/',
  },
  {
    name: 'Kemper Agent Inside',
    contacts: [
      { label: 'Agent Inside', value: '866-675-3345, option 6', href: 'tel:+18666753345' },
      {
        label: 'Claims',
        value: '888-252-2799, option 3 then 1',
        href: 'tel:+18882522799',
      },
    ],
    url: 'https://signin.kemper.com/login/kpi/?realm=/AEV&goto=https%3A%2F%2Fsignin.kemper.com%2Fam%2Foauth2%2Frealms%2Froot%2Frealms%2FAEV%2Fauthorize%3Fscope%3Dopenid%26response_type%3Did_token%26realm%3D%2FAEV%26redirect_uri%3Dhttps%3A%2F%2Fwww.agentinside.com%2Fwps%2Fmyportal%26nonce%3D86f20ed7-5f10-432d-9fc4-12aa7879c1ca-740771%26client_id%3DAgent_Inside_FRAG%26response_mode%3Dform_post',
  },
  {
    name: 'Nationwide',
    phone: '800-282-1446',
    address: 'Mail: P.O. Box 742522, Cincinnati, OH 45274-2522',
    url: 'https://www.nationwide.com/',
  },
  {
    name: 'Safeco',
    phone: '877-566-6001',
    url: 'https://www.safeco.com/',
  },
  {
    name: 'State Auto Insurance',
    phone: '800-777-7324',
    url: 'https://www.stateauto.com/',
  },
  {
    name: 'Rockford Insurance',
    phone: '800-747-2957',
    url: 'http://www.rockfordmutual.com/index.php',
  },
  {
    name: 'Frontier Insurance',
    phone: '217-732-8222',
    url: 'https://www.koettinginsurance.net/billing-claims/',
  },
  {
    name: 'Midwest Insurance',
    phone: '800-375-2075',
    url: 'https://www.midins.com/',
  },
  {
    name: 'Farmers',
    phone: '800-255-0332',
    contacts: [
      {
        label: 'Auto and home requests',
        value: 'autoandhomerequest@metlife.com',
        href: 'mailto:autoandhomerequest@metlife.com',
      },
      {
        label: 'Liz Louis',
        value: '314-891-2030 · liz.louis@foremost.com',
        href: 'tel:+13148912030',
      },
      {
        label: 'Charles “Chaz” Powell',
        value: '859-221-3881 · charles.powell@foremost.com',
        href: 'tel:+18592213881',
      },
      {
        label: 'Online account help',
        value: '866-363-8669',
        href: 'tel:+18663638669',
      },
    ],
    url: 'https://www.foremost.com/',
  },
  {
    name: 'Progressive',
    contacts: [
      { label: 'Customer service', value: '800-776-4737', href: 'tel:+18007764737' },
      { label: 'BOP underwriting', value: '877-292-8025', href: 'tel:+18772928025' },
      { label: 'Account problems', value: '800-876-5581', href: 'tel:+18008765581' },
    ],
    url: 'https://www.progressive.com/',
  },
  {
    name: 'Spriska',
    phone: '217-753-2500',
    contacts: [
      {
        label: 'Policy changes',
        value: 'policychanges@spriska.com',
        href: 'mailto:policychanges@spriska.com',
      },
    ],
    url: 'https://www.spriska.com/',
  },
] as const;
