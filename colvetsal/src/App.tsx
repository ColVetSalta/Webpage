import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, NavBar } from "./elements/index";
import './App.css'
import React, { Suspense } from "react";
import { useAppDispatch } from "./redux/hooks";
import axios from "axios";
import { getOrganism } from "./redux/orgSlice";
import { Organismo } from "./types";

const Institutional = React.lazy(() => import('./elements/pages/Institutional/Institutional'))
const Home = React.lazy(() => import('./elements/pages/Home/Home'))
const Landing = React.lazy(() => import('./elements/pages/Landing/Landing'))

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  React.useEffect(()=>{
    axios.get('/organismo?org=Mesa Directiva')
    .then((data)=> console.log(data))
    .then((data)=> {dispatch(getOrganism(data as unknown as Organismo[]))})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Suspense fallback={<Landing />}>
      {location.pathname !== '/' &&
        <NavBar />
      }
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sc/:motive" element={<Institutional />} />

      </Routes>
      {location.pathname !== '/' &&
        <Footer />
      }
    </Suspense>
  )
}

export default App
