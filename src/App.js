import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/home";
import TwoDDesigns from "./components/2d_designs";
import ThreeDDesigns from "./components/3d_designs";
import ElevationDesigns from "./components/elevation_designs";
import InteriorDesigns from "./components/interior_designs";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2d_designs" element={<TwoDDesigns />} />
        <Route path="/3d_designs" element={<ThreeDDesigns />} />
        <Route path="/elevation_designs" element={<ElevationDesigns />} />
        <Route path="/interior_designs" element={<InteriorDesigns />} />
        <Route path="/navBar" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
