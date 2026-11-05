
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Gallery from './components/Gallery'
import Donation from './components/Donation'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Programs />
        <Gallery />
        <Donation />
        <Contact />
        
      </main>
      <Footer />
    </>
  )
}

export default App
