import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Header from './components/header/header'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import { ToastContainer } from 'react-toastify';
import Login from './pages/forms/Login'
import Forgot from './pages/forms/Forgot'


function App() {

  return (
    <>
    <BrowserRouter>
    <ToastContainer theme="colored" position="top-center" />
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/forgot-password' element={<Forgot/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
