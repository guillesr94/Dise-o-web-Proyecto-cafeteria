import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './Paginas/Home/Home'
import Contact from './Paginas/Contact/Contact'
import About from './Paginas/About/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar/>
      <main className="main">
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/about" element={<About/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
    </>
  )
}

export default App;
