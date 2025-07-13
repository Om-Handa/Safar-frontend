// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
// import {
//   HashRouter,
//   Routes,
//   Route
// } from 'react-router-dom';

// import Home from './pages/Home.jsx';
// import HotelData from './pages/HotelData.jsx';
// import ContactUs from './pages/ContactUs.jsx';
// import About from './pages/About.jsx';
// import Login from './pages/Login.jsx';
// import SignIn from './pages/SignIn.jsx';
// import HotelDetail from './pages/HotelDetail.jsx';
// import TrainData from './pages/TrainData.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route index element={<Home />} />
//           <Route path="/HotelData" element={<HotelData />} />
//           <Route path="/TrainData" element={<TrainData />} />
//           <Route path="/ContactUs" element={<ContactUs />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/SignIn" element={<SignIn />} />
//           <Route path="/HotelDetail" element={<HotelDetail />} />
//         </Route>
//       </Routes>
//     </HashRouter>
//   </StrictMode>
// );
import React from 'react';
import Navbar from './Components/Navbar';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return <h1 className="text-4xl text-green-500">This is Home Page</h1>;
}

function App() {
  return (
    <>
      <h1 className="text-3xl">Navbar (Hardcoded)</h1>
      <Routes>
        <Route path="/" element={<><Navbar/><Home /></>} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);