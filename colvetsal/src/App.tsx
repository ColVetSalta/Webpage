import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Landing, NavBar } from "./elements/index";
import './App.css'
import React from "react";
// import Institutional from "./elements/pages/Institutional/Institutional";
const Institutional = React.lazy(()=> import('./elements/pages/Institutional/Institutional'))

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' &&
        <NavBar />
      }
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/institutional" element={<Institutional />} />

      </Routes>
    </>
  )
}

export default App
