const hours = [['Mon – Thu', '12:00 – 22:00'], ['Fri – Sat', '12:00 – 23:30'], ['Sunday', '13:00 – 21:00']];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
      <div>
        <h2 className="font-display text-4xl font-bold">Find us</h2>
        <address className="mt-6 space-y-2 not-italic text-neutral-700">
          <p>24 Market Street, Your City</p>
          <p><a href="tel:+10000000000" className="hover:text-[#c8102e]">+1 000 000 0000</a></p>
          <p><a href="mailto:hello@foody.com" className="hover:text-[#c8102e]">hello@foody.com</a></p>
        </address>
        <table className="mt-8 w-full max-w-sm text-sm">
          <caption className="mb-2 text-left font-medium">Opening hours</caption>
          <tbody>{hours.map(([d, t]) => <tr key={d} className="border-b border-neutral-300"><td className="py-2">{d}</td><td className="py-2 text-right">{t}</td></tr>)}</tbody>
        </table>
      </div>
      <iframe title="Restaurant location map" loading="lazy" className="h-80 w-full rounded-[2rem] border-0 shadow-md lg:h-full" src="https://www.google.com/maps?q=Times+Square+New+York&output=embed" />
    </section>
  );
}
