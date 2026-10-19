export default function Footer() {
  return (
    <footer className="border-t border-neutral-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-neutral-600 sm:flex-row">
        <p className="font-display text-2xl text-neutral-900">Foo<span className="text-[#c8102e]">dy</span></p>
        <p>© {new Date().getFullYear()} Foody. All rights reserved.</p>
        <div className="flex gap-5">{['Instagram', 'Facebook', 'TikTok'].map((s) => <a key={s} href="#" className="hover:text-[#c8102e]">{s}</a>)}</div>
      </div>
    </footer>
  );
}
