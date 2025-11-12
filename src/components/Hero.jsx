import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0a] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black leading-tight tracking-tight"
            >
              Embrace the Future of Speed
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="mt-5 text-lg md:text-xl text-white/80 max-w-xl"
            >
              A sleek sports car engineered for the night. Carbon precision, electric thrust, and an interior that glows with intent.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#models" className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 transition-colors font-semibold">Explore Models</a>
              <a href="#features" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-semibold">See Features</a>
            </motion.div>
            <div className="mt-8 flex items-center gap-6 text-white/70">
              <div>
                <div className="text-2xl font-bold">2.3s</div>
                <div className="text-xs uppercase tracking-wider">0-60 mph</div>
              </div>
              <div>
                <div className="text-2xl font-bold">310mi</div>
                <div className="text-xs uppercase tracking-wider">Range</div>
              </div>
              <div>
                <div className="text-2xl font-bold">1,020hp</div>
                <div className="text-xs uppercase tracking-wider">Power</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  )
}
