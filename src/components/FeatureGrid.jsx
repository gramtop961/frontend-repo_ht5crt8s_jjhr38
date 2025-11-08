import { motion } from 'framer-motion';
import { Shield, Trophy, Sparkles, ChartBar, CreditCard, Zap } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: 'Rewards Engine',
    desc: 'Earn streaks, badges, and cashback when you hit your savings goals.'
  },
  {
    icon: ChartBar,
    title: 'Visual Analytics',
    desc: 'Crystal-clear insights that turn your spending into stories.'
  },
  {
    icon: CreditCard,
    title: 'Virtual Cards',
    desc: 'Create one-time cards for safer online spending and subscriptions.'
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    desc: 'Biometric lock, 3D Secure, and real-time fraud alerts.'
  },
  {
    icon: Zap,
    title: 'Instant Transfers',
    desc: 'Send money at the speed of text with zero hidden fees.'
  },
  {
    icon: Sparkles,
    title: 'Gen Z Design',
    desc: 'Dark mode first with neon gradients and buttery micro-interactions.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_20%_10%,rgba(34,211,238,0.12),transparent),radial-gradient(700px_350px_at_80%_0%,rgba(168,85,247,0.18),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built to be addictive (in a good way)</h2>
          <p className="mt-3 text-white/70">Every tap, swipe, and streak is designed to move your money forward.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-white/20 transition group"
            >
              <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30 border border-white/10">
                <f.icon className="text-white" size={20} />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{f.title}</h3>
              <p className="mt-1.5 text-white/70 text-sm leading-relaxed">{f.desc}</p>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-fuchsia-500/10 to-cyan-400/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
