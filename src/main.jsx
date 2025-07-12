import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import HotelData from './Pages/HotelData.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import About from './Pages/About.jsx'
import Login from './Pages/Login.jsx'
import SignIn from './Pages/SignIn.jsx'
import HotelDetail from './Pages/HotelDetail.jsx'
import TrainData from './pages/TrainData.jsx'

createRoot(document.getElementById('root')).render(

    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/HotelData" element={<HotelData />} />
          <Route path="/TrainData" element={<TrainData />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/HotelDetail" element={<HotelDetail/>} />
        </Route>
      </Routes>
    </HashRouter>
)
