import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
