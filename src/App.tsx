import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import SignIn_Up from './Pages/SignIn_Up'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import AboutUs from './Pages/AboutUs'
import ServicesPage from './Pages/Services'
import ContactUs from './Pages/ContactUs'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn_Up" element={<SignIn_Up />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
