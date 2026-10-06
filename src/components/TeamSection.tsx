import ReviewsSection from './ReviewsSection';

const team = [
  { name: 'Taylor', role: 'Insurance advisor', email: 'taylor@koettinginsurance.net', image: '/taylor-headshot.jpg' },
  { name: 'Camryn', role: 'Insurance advisor', email: 'camryn@koettinginsurance.net', image: '/camryn-headshot.jpg' },
];

export default function TeamSection() {
  return <><section className="team-section container" aria-labelledby="team-title">
    <div className="team-heading">
      <div><p className="eyebrow">A FAMILIAR FACE WHEN YOU NEED ONE</p><h2 id="team-title">Meet the people<br/>behind your coverage.</h2></div>
      <p>Thoughtful guidance starts with a real relationship. Taylor and Camryn are here to make insurance feel more personal.</p>
    </div>
    <div className="team-grid">{team.map(person => <article className="team-card" key={person.name}>
      <img src={person.image} alt={`${person.name} from Koetting Insurance`} />
      <div className="team-card-copy"><p className="eyebrow">{person.role}</p><h3>{person.name}</h3><a href={`mailto:${person.email}`}>{person.email}</a></div>
    </article>)}</div>
  </section><ReviewsSection/></>;
}
