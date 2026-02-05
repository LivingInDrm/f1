import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { F1Basics } from './components/F1Basics'
import { ShanghaiCircuit } from './components/ShanghaiCircuit'
import { RaceSchedule } from './components/RaceSchedule'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-primary">
      <Navbar />
      <Hero />
      <F1Basics />
      <ShanghaiCircuit />
      <RaceSchedule />
      <Footer />
    </div>
  )
}

export default App
