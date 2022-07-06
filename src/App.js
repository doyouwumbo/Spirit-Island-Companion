import './App.css';
import { Spirits } from './pages/Spirits';
import {Navbar} from './components/navbar';
import {ElementTracker} from "./pages/ElementTracker";
import { RiverSurgesInSunlight } from './pages/RiverSurgesInSunlight';
import { LightningsSwiftStrike } from './pages/LightningsSwiftStrike';
import { ShadowsFlickerLikeFlame } from './pages/ShadowsFlickerLikeFlame'
import { VitalStrengthOfTheEarth } from './pages/VitalStrengthOfTheEarth';
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";

function App() {

  // Clear which tab was last activated 
  // window.addEventListener("beforeunload", function(e){
  //   window.localStorage.removeItem('NAVBAR_TAB');
  // }, false);

  return (
      <Router basename="/Spirit-Island-Companion">
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Navigate to="/element-tracker" />} />
              <Route path="/spirits" element={<Spirits />}/>
              <Route path="/element-tracker" element={<ElementTracker />} />
              <Route path="/spirits/river-surges-in-sunlight" element={<RiverSurgesInSunlight />}></Route>
              <Route path="/spirits/lightnings-swift-strike" element={<LightningsSwiftStrike />}></Route>
              <Route path="/spirits/shadows-flicker-like-flames" element={<ShadowsFlickerLikeFlame />}></Route>
              <Route path="/spirits/vital-strength-of-the-earth" element={<VitalStrengthOfTheEarth />}></Route>
            </Routes>
      </Router>
  );
}

export default App;
