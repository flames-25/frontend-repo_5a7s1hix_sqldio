import { motion } from 'framer-motion'

const models = [
  { name: 'VXR', tagline: 'Track focused', spec: '1,020 hp • 0-60 in 2.3s • RWD Bias' },
  { name: 'Eclipse', tagline: 'Grand touring', spec: '780 hp • 310 mi range • Dual Motor' },
  { name: 'Phantom', tagline: 'Stealth edition', spec: '900 hp • Adaptive Aero • AWD' },
]

export default function Models() {
  return (
    <section id="models" className="relative bg-[#0a0a0a] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Choose your edge</h2>
            <p className="text-white/70 mt-2">Three configurations tuned for distinctly different roads.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition">Reserve Now</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((m) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6"
            >
              <div className="text-2xl font-bold">{m.name}</div>
              <div className="text-sm text-red-500 uppercase tracking-wider">{m.tagline}</div>
              <div className="mt-3 text-white/70 text-sm">{m.spec}</div>
              <div className="mt-6">
                <a href="#contact" className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 transition font-semibold">Reserve</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
