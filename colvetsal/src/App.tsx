import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Landing, NavBar } from "./elements/index";
import './App.css'

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
      </Routes>
    </>
  )
}

export default App
