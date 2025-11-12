import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Models from './components/Models'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Features />
      <Models />
      <Footer />
    </div>
  )
}

export default App
