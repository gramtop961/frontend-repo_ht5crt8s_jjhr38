import { useState } from 'react';
import { Menu, X, Download, PlayCircle } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-full px-4 sm:px-6 py-2.5 flex items-center gap-3 sm:gap-6 max-w-4xl w-[92%]">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400"></div>
          <span className="text-white font-semibold tracking-wide">Pulse</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#rewards" className="hover:text-white transition">Rewards</a>
          <a href="#security" className="hover:text-white transition">Security</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>

        <div className="ml-auto hidden md:flex items-center gap-3">
          <a href="#demo" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/90 hover:text-white hover:bg-white/5 transition">
            <PlayCircle size={18} /> Watch Demo
          </a>
          <a href="#get" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-black font-semibold shadow-[0_0_30px_rgba(168,85,247,0.35)]">
            <Download size={18} /> Get the App
          </a>
        </div>

        <button className="md:hidden ml-auto text-white/90" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>

        {open && (
          <div className="absolute top-[54px] left-0 right-0 mx-auto w-[92%] md:hidden">
            <div className="mt-2 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-4 text-white/90 space-y-3">
              <a href="#features" className="block">Features</a>
              <a href="#rewards" className="block">Rewards</a>
              <a href="#security" className="block">Security</a>
              <a href="#faq" className="block">FAQ</a>
              <div className="flex gap-2 pt-2">
                <a href="#demo" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-white/15 hover:bg-white/5 transition">
                  <PlayCircle size={18} /> Demo
                </a>
                <a href="#get" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-black font-semibold">
                  <Download size={18} /> Get
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
