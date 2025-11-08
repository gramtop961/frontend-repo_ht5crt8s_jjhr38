import { motion } from 'framer-motion';
import { Download, ShieldCheck } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="get" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_350px_at_50%_0%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Your money, gamified. Ready to play?
        </motion.h3>
        <p className="mt-3 text-white/70">Join early users getting rewarded for better habits — not bigger balances.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-black font-semibold shadow-[0_0_35px_rgba(168,85,247,0.35)]">
            <Download size={18} /> Get the App
          </a>
          <a href="#security" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/90 hover:bg-white/5 transition">
            <ShieldCheck size={18} /> Security
          </a>
        </div>
        <p className="mt-3 text-xs text-white/50">Available on iOS and Android soon.</p>
      </div>
    </section>
  );
}
