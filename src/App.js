import './App.css';
import { Spirits } from './pages/Spirits';
import {Navbar} from './components/navbar';
import {ElementTracker} from "./pages/ElementTracker";
import { RiverSurgesInSunlight } from './pages/RiverSurgesInSunlight';
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";

function App() {
  return (
      <Router basename="/Spirit-Island-Companion">
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Navigate to="/element-tracker" />} />
              <Route path="/spirits" element={<Spirits />}/>
              <Route path="/element-tracker" element={<ElementTracker />} />
              <Route path="/spirits/river-surges-in-sunlight" element={<RiverSurgesInSunlight />}></Route>
            </Routes>
      </Router>
  );
}

export default App;
