import { motion } from 'framer-motion'
import { Gauge, BatteryCharging, Cpu, Zap, ShieldCheck, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Track-Calibrated Dynamics',
    desc: 'Adaptive aero and torque vectoring keep you planted at any speed.',
  },
  {
    icon: BatteryCharging,
    title: 'Ultra-Fast Charging',
    desc: 'Go from 10% to 80% in under 15 minutes at compatible stations.',
  },
  { icon: Cpu, title: 'Neural Drive', desc: 'AI-enhanced driver assistance with continual OTA improvements.' },
  { icon: Zap, title: 'Tri-Motor Output', desc: 'Instantaneous torque with independent rear-wheel control.' },
  { icon: ShieldCheck, title: 'Carbon Safety Cell', desc: 'Rigid, lightweight monocoque for uncompromised protection.' },
  { icon: Sparkles, title: 'Ambient Red Core', desc: 'Illuminated interior tuned for focus without distraction.' },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">Engineered to Thrill</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Every component obsessively refined for performance, control, and presence.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <Icon className="h-6 w-6 text-red-500" />
              <h3 className="mt-3 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
