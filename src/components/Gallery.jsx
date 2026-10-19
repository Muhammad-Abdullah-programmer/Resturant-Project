import { gallery } from './data';

export default function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="font-display text-4xl font-bold">Inside Foody</h2>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {gallery.map((src, i) => (
          <img key={src} src={src} alt={`Restaurant photo ${i + 1}`} loading="lazy" className={`w-full rounded-3xl object-cover ${i % 2 ? 'h-72' : 'h-60 md:mt-10'}`} />
        ))}
      </div>
    </section>
  );
}
