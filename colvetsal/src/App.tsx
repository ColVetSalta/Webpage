import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, NavBar } from "./elements/index";
import './App.css'
import React, { Suspense } from "react";
const Institutional = React.lazy(() => import('./elements/pages/Institutional/Institutional'))
const Home = React.lazy(() => import('./elements/pages/Home/Home'))
const Landing = React.lazy(() => import('./elements/pages/Landing/Landing'))

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Landing />}>
      {location.pathname !== '/' &&
        <NavBar />
      }
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/institucional/:motive" element={<Institutional />} />
        <Route path="/novedades/:motive" element={<Institutional />} />

      </Routes>
      {location.pathname !== '/' &&
        <Footer />
      }
    </Suspense>
  )
}

export default App
