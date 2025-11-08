import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(168,85,247,0.35),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(34,211,238,0.25),transparent)] pointer-events-none" />

      {/* Spline 3D */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-purple-200 to-cyan-200 drop-shadow-[0_0_30px_rgba(167,139,250,0.35)]"
        >
          Banking that rewards your habits.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-5 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
        >
          Track spending. Build goals. Earn rewards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a href="#get" className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-black font-semibold shadow-[0_0_35px_rgba(168,85,247,0.35)]">
            Get the App
          </a>
          <a href="#demo" className="px-6 py-3 rounded-full border border-white/15 text-white/90 hover:bg-white/5 transition">
            Watch Demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 text-white/60 text-xs uppercase tracking-wider"
        >
          <span>Dashboard</span>
          <span>Analytics</span>
          <span>Goals</span>
          <span>Virtual Card</span>
        </motion.div>
      </div>
    </section>
  );
}
