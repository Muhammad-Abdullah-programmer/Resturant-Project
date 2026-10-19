export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-10 lg:grid-cols-2">
      <div>
        <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">it’s not just Food, It’s an Experience.</h1>
        <p className="mt-6 max-w-md text-neutral-600">Hand-rolled pasta, wood-fired pizza and seasonal plates, served in a room that feels like home.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#menu" className="rounded-full bg-[#c8102e] px-9 py-4 text-sm text-white shadow-lg shadow-red-900/20 transition hover:bg-[#a30d25]">View Menu</a>
          <a href="#reserve" className="rounded-full bg-white/70 px-9 py-4 text-sm transition hover:bg-white">Book A Table</a>
        </div>
        <div className="mt-10">
          <p className="mb-2 text-sm font-medium">Reviews</p>
          <div className="flex items-center">
            {[11, 32, 47].map((n) => <img key={n} src={`https://i.pravatar.cc/80?img=${n}`} alt="" className="-ml-2 h-11 w-11 rounded-full border-2 border-[#ece8e8] first:ml-0" />)}
            <span className="-ml-2 flex h-11 w-11 items-center justify-center rounded-full bg-neutral-800 text-xs text-white">45+</span>
          </div>
          <p className="mt-1 text-amber-500">★★★★★</p>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-xl">
        <div className="absolute -left-2 top-6 z-10 rounded-xl bg-white/90 px-5 py-3 shadow-lg">
          <p className="text-xl font-medium">5%</p>
          <p className="text-xs"><b className="text-[#c8102e]">Discount</b> for 2 orders</p>
        </div>
        <img src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900" alt="Colorful farfalle pasta with tomatoes and basil" className="aspect-square w-full rounded-full border-[10px] border-slate-400/60 object-cover shadow-2xl" />
      </div>
    </section>
  );
}
