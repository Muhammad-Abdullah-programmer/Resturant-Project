import { useState } from 'react';
import { dishes, categories } from './data';

export default function MenuSection({ onAdd }) {
  const [cat, setCat] = useState('All');
  const items = cat === 'All' ? dishes : dishes.filter((d) => d.cat === cat);
  return (
    <section id="menu" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="font-display text-4xl font-bold">Our menu</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {categories.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`rounded-full px-5 py-2 text-sm transition ${cat === c ? 'bg-[#c8102e] text-white' : 'bg-white/70 hover:bg-white'}`}>{c}</button>
        ))}
      </div>
      <div className="mt-16 grid gap-x-8 gap-y-24 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((d) => (
          <article key={d.id} className="relative rounded-[2rem] bg-gradient-to-b from-neutral-300/70 to-white/80 px-6 pb-6 pt-28 shadow-md">
            <img src={d.img} alt={d.name} className="absolute -top-12 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full border-4 border-slate-300 object-cover shadow-xl" />
            <button onClick={() => onAdd(d)} aria-label={`Add ${d.name} to cart`} className="absolute right-4 top-16 flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-[#c8102e]">+</button>
            <h3 className="text-lg">{d.name}</h3>
            <p className="text-sm text-neutral-600">{d.desc}</p>
            <p className="mt-8 font-medium">${d.price.toFixed(2)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}