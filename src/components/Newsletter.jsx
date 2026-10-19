import { useState } from 'react';

export default function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 text-center">
      <h2 className="font-display text-3xl font-bold">Get offers in your inbox</h2>
      {done ? <p className="mt-6 text-green-700" role="status">You are subscribed.</p> : (
        <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mx-auto mt-6 flex max-w-md gap-2">
          <input required type="email" placeholder="Your email" aria-label="Email" className="flex-1 rounded-full border border-neutral-300 bg-white/80 px-5 py-3 outline-none focus:border-[#c8102e]" />
          <button className="rounded-full bg-[#c8102e] px-6 text-white hover:bg-[#a30d25]">Subscribe</button>
        </form>
      )}
    </section>
  );
}
