import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import SignUpForm from './Pages/SignUpForm'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import AboutUs from './Pages/AboutUs'
import ServicesPage from './Pages/Services'
import ContactUs from './Pages/ContactUs'
import Dashboard from './Components/Dashboard';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
