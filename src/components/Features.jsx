const items = [
  ['Fresh ingredients', 'Delivered daily from farms within 50 km.'],
  ['Fast delivery', 'Hot food at your door in about 30 minutes.'],
  ['Dietary friendly', 'Vegetarian, vegan and gluten-free options marked on the menu.'],
  ['Private dining', 'Rooms for birthdays and events of up to 40 guests.'],
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([t, d]) => (
          <div key={t} className="rounded-3xl bg-white/70 p-6">
            <span className="mb-4 block h-2 w-10 rounded-full bg-[#c8102e]" />
            <h3 className="font-medium">{t}</h3>
            <p className="mt-2 text-sm text-neutral-600">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
