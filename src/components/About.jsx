const stats = [['12', 'Years cooking'], ['40+', 'Dishes on the menu'], ['4.8', 'Average rating']];

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
      <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900" alt="Chef plating a dish" className="h-[420px] w-full rounded-[2rem] object-cover shadow-xl" />
      <div>
        <h2 className="font-display text-4xl font-bold">Cooked slowly, served fresh</h2>
        <p className="mt-5 text-neutral-600">Foody started as a family kitchen. We still make pasta by hand every morning, buy produce from local farms, and keep the menu small enough to do every dish properly.</p>
        <dl className="mt-8 grid grid-cols-3 gap-4">
          {stats.map(([n, l]) => (
            <div key={l} className="rounded-2xl bg-white/70 p-4"><dt className="font-display text-3xl text-[#c8102e]">{n}</dt><dd className="text-sm text-neutral-600">{l}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}
