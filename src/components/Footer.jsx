import { Car, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white font-semibold tracking-wide">
              <Car className="h-6 w-6 text-red-500" />
              <span>Velocity</span>
            </div>
            <p className="text-white/70 mt-3 max-w-md">
              Precision-built electric performance cars designed for the night. Reserve your build and feel the difference.
            </p>
          </div>
          <div>
            <div className="text-white/80 font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 012-3456</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@velocity.cars</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Apex Blvd, Night City</li>
            </ul>
          </div>
          <div>
            <div className="text-white/80 font-semibold mb-3">Company</div>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#models" className="hover:text-white">Models</a></li>
              <li><a href="#tech" className="hover:text-white">Technology</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">© {new Date().getFullYear()} Velocity Automotive. All rights reserved.</div>
      </div>
    </footer>
  )
}
