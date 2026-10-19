import { useState } from 'react';

const links = [['Home', '#home'], ['Menu', '#menu'], ['About Us', '#about'], ['Reservation', '#reserve'], ['Contact', '#contact']];

export default function Navbar({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#ece8e8]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="font-display text-3xl font-medium">Foo<span className="text-[#c8102e]">dy</span></a>
        <ul className="hidden gap-10 md:flex">
          {links.map(([label, href], i) => (
            <li key={label}><a href={href} className={`transition hover:text-[#c8102e] ${i === 0 ? 'text-[#c8102e]' : ''}`}>{label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button aria-label="Cart" className="relative">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M6 8h12l1 12H5L6 8zM9 8a3 3 0 016 0" /></svg>
            {cartCount > 0 && <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#c8102e] text-[10px] text-white">{cartCount}</span>}
          </button>
          <a href="#reserve" className="hidden rounded-full bg-[#c8102e] px-8 py-3 text-white shadow-lg shadow-red-900/20 transition hover:bg-[#a30d25] sm:block">Sign Up</a>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden text-2xl">{open ? '✕' : '☰'}</button>
        </div>
      </nav>
      {open && (
        <ul className="space-y-4 px-6 pb-6 md:hidden">
          {links.map(([label, href]) => <li key={label}><a href={href} onClick={() => setOpen(false)}>{label}</a></li>)}
        </ul>
      )}
    </header>
  );
}
