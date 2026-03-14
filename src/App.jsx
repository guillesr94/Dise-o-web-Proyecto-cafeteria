import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './Paginas/Home/Home'
import Contact from './Paginas/Contact/Contact'
import About from './Paginas/About/About'
import Menu from './Paginas/Menu/Menu'
import ButtonWhatsapp from './components/ButtonWhatsapp/ButtonWhatsapp'

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
           {/* <Route path="/menu" element={<Menu/>}/> */}
        </Routes>
      </main>
      <Footer/>
      <ButtonWhatsapp/>
    </Router>
    </>
  )
}

export default App;
