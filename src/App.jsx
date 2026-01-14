import './App.css'
import Navbar from './components/Navbar'
import Gallery from './pages/Gallery'
import Home from './components/Home'
import About from './pages/About'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
    </BrowserRouter>


     </>
  )
}


export default App;
