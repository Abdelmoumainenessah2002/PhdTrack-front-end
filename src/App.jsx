import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import { ToastContainer } from "react-toastify"
import Login from "./pages/forms/Login"
import Forgot from "./pages/forms/Forgot"
import Admindashbord from "./pages/adminDashbord/Admindashbord"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import ConcoursList from "./pages/concoursList/ConcoursList"

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer theme="colored" position="top-center" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/admin-dashbord" element={<Admindashbord />} />
          <Route path="/concours-list" element={<ConcoursList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
