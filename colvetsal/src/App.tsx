import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, NavBar } from "./elements/index";
import './App.css'
import React, { Suspense } from "react";
import NovedadesDetail from "./elements/pages/NovedadesDetail/NovedadesDetail";
// import { useAppDispatch } from "./redux/hooks";
// import axios from "axios";
// import { getOrganism } from "./redux/orgSlice";
// import { Organismo } from "./types";

const Section = React.lazy(() => import('./elements/pages/Section/Section'))
const Home = React.lazy(() => import('./elements/pages/Home/Home'))
const Landing = React.lazy(() => import('./elements/pages/Landing/Landing'))
const ResolutionDetail = React.lazy(() => import('./elements/pages/ResolutionDetail/ResolutionDetail'))

function App() {
  const location = useLocation();
  // const dispatch = useAppDispatch();

  // React.useEffect(()=>{
  //   axios.get<Organismo>('/organismo?full=true')
  //   .then((data)=> {
  //     console.log(data)
  //     dispatch(getOrganism(data.data))
  //   })
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[])

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

      </Routes>
      {location.pathname !== '/' &&
        <Footer />
      }
    </Suspense>
  )
}

export default App
