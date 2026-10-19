import { reviews } from './data';

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="font-display text-4xl font-bold">What guests say</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="rounded-3xl bg-white/70 p-6">
            <p className="text-amber-500" aria-label={`${r.stars} out of 5 stars`}>{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</p>
            <blockquote className="mt-3 text-neutral-700">{r.text}</blockquote>
            <figcaption className="mt-4 font-medium">{r.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
