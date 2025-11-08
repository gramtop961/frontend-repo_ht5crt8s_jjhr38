import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screens = [
  {
    title: 'Dashboard',
    img: 'https://images.unsplash.com/photo-1621939514649-280211d05b8c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Analytics',
    img: 'https://images.unsplash.com/photo-1642790591532-2fedba68bb20?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Goals',
    img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Virtual Card',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const timeoutRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % screens.length);
  const prev = () => setIndex((i) => (i - 1 + screens.length) % screens.length);

  useEffect(() => {
    controls.start({ x: -index * 320, transition: { type: 'spring', stiffness: 100, damping: 20 } });
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(next, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [index, controls]);

  return (
    <section className="relative py-20" aria-label="App screens carousel">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">See Pulse in motion</h3>
            <p className="text-white/70 mt-1">Key screens that tell your money story.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={prev} className="h-10 w-10 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/5 flex items-center justify-center">
              <ChevronLeft />
            </button>
            <button onClick={next} className="h-10 w-10 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/5 flex items-center justify-center">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div className="flex gap-4" animate={controls}>
            {screens.map((s) => (
              <figure key={s.title} className="shrink-0 w-[300px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                <img src={s.img} alt={s.title} className="h-[560px] w-full object-cover" />
                <figcaption className="px-4 py-3 text-white/80 text-sm">{s.title}</figcaption>
              </figure>
            ))}
          </motion.div>
        </div>

        <div className="sm:hidden mt-5 flex items-center justify-center gap-2">
          <button onClick={prev} className="h-10 w-10 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/5 flex items-center justify-center">
            <ChevronLeft />
          </button>
          <button onClick={next} className="h-10 w-10 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/5 flex items-center justify-center">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
