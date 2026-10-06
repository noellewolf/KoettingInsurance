const reviews = [
  {
    quote:
      'Taylor and his team are the best. If my rates go up they call me immediately and find better rates, I don’t know what I would do without them!',
    name: 'Kris Shea',
  },
  {
    quote:
      'My family and I have used Koetting Insurance for as long as I can remember. They treat you like family and go above and beyond to make sure you have the best options available for both health, business, homeowners and auto insurance. When my husband and I married we switched all his business and auto to Koetting Insurance and right away he mentioned how much he was going to save by switching, but most importantly he commented how fantastic they are with customer service and help.',
    name: 'Anna Venhaus',
  },
];

export default function ReviewsSection() {
  return (
    <section className="reviews-section container" aria-labelledby="reviews-title">
      <div className="reviews-heading">
        <div>
          <p className="eyebrow">FROM OUR CLIENTS</p>
          <h2 id="reviews-title">
            Good people notice
            <br />
            good service.
          </h2>
        </div>
        <a
          className="google-rating"
          href="https://www.google.com/maps/place/Koetting+Insurance+%26+Resource+Agency,+LLC/"
          target="_blank"
          rel="noreferrer"
        >
          <span aria-hidden="true">★★★★★</span>
          <strong>4.8 stars on Google</strong>
          <small>Read all reviews ↗</small>
        </a>
      </div>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <figure className="review-card" key={review.name}>
            <blockquote>“{review.quote}”</blockquote>
            <figcaption>— {review.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
