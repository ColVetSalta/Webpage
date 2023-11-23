import { Route, Routes, useLocation } from "react-router-dom";
import { Admin, Footer, NavBar } from "./elements/index";
import './App.css'
import React, { Suspense } from "react";
import NovedadesDetail from "./elements/pages/NovedadesDetail/NovedadesDetail";


const Section = React.lazy(() => import('./elements/pages/Section/Section'))
const Home = React.lazy(() => import('./elements/pages/Home/Home'))
const Landing = React.lazy(() => import('./elements/pages/Landing/Landing'))
const ResolutionDetail = React.lazy(() => import('./elements/pages/ResolutionDetail/ResolutionDetail'))

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
        <Route path="/sc/:motive" element={<Section />} />
        <Route path="/res/detail/:id" element={<ResolutionDetail />} />
        <Route path="/news/detail/:id" element={<NovedadesDetail />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {location.pathname !== '/' &&
        <Footer />
      }
    </Suspense>
  )
}

export default App
