import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Features from './components/Features';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import '../src/App.css'
export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar cartCount={cart.length} />
      <main>
        <Hero />
        <MenuSection onAdd={(d) => setCart([...cart, d])} />
        <Features />
        <About />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}