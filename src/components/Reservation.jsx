import { useState } from 'react';

const field = 'w-full rounded-xl border border-neutral-300 bg-white/80 px-4 py-3 outline-none focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/20';

export default function Reservation() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <section id="reserve" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 rounded-[2rem] bg-white/60 p-8 shadow-md lg:grid-cols-2 lg:p-14">
        <div>
          <h2 className="font-display text-4xl font-bold">Book a table</h2>
          <p className="mt-4 max-w-sm text-neutral-600">Tell us when you are coming. We will confirm by phone or email within an hour.</p>
        </div>
        {sent ? (
          <p className="self-center rounded-xl bg-green-100 p-6 text-green-800" role="status">Request sent. We will confirm your table shortly.</p>
        ) : (
          <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
            <label className="sm:col-span-2">Full name<input required className={field} /></label>
            <label>Email<input required type="email" className={field} /></label>
            <label>Phone<input required type="tel" className={field} /></label>
            <label>Date<input required type="date" className={field} /></label>
            <label>Time<input required type="time" className={field} /></label>
            <label className="sm:col-span-2">Guests
              <select className={field}>{[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n}>{n}</option>)}</select>
            </label>
            <label className="sm:col-span-2">Special requests<textarea rows="3" className={field} /></label>
            <button className="rounded-full bg-[#c8102e] py-4 text-white transition hover:bg-[#a30d25] sm:col-span-2">Request table</button>
          </form>
        )}
      </div>
    </section>
  );
}
