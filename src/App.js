import './App.css';
import { Spirits } from './pages/Spirits';
import {Navbar} from './components/navbar';
import {ElementTracker} from "./pages/ElementTracker";
import { RiverSurgesInSunlight } from './pages/RiverSurgesInSunlight';
import { LightningsSwiftStrike } from './pages/LightningsSwiftStrike';
import { ShadowsFlickerLikeFlame } from './pages/ShadowsFlickerLikeFlame'
import { VitalStrengthOfTheEarth } from './pages/VitalStrengthOfTheEarth';
import { Thunderspeaker } from './pages/Thunderspeaker';
import { RampantSpreadOfGreen } from './pages/RampantSpreadOfGreen';
import { BringerOfDreamsAndNightmares } from './pages/BringerOfDreamsAndNightmares';
import { OceansHungryGrasp } from './pages/OceansHungryGrasp';
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";

function App() {

  // Clear which tab was last activated 
  // window.addEventListener("beforeunload", function(e){
  //   window.localStorage.removeItem('NAVBAR_TAB');
  // }, false);

  return (
    <div className='app'>
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
              <Route path="/spirits/thunderspeaker" element={<Thunderspeaker />}></Route>
              <Route path="/spirits/rampant-spread-of-green" element={<RampantSpreadOfGreen />}></Route>
              <Route path="/spirits/bringer-of-dreams-and-nightmares" element={<BringerOfDreamsAndNightmares />}></Route>
              <Route path="/spirits/oceans-hungry-grasp" element={<OceansHungryGrasp />}></Route>
            </Routes>
        </Router>
        <footer style={{marginTop: 10, marginLeft: 10, marginRight: -10, textAlign: 'center', position: 'fixed', width: '100%', bottom: 10}}>
          <small>
              All credit goes the creator to R. Eric Reuss. 
              All content related to Spirit Island is for the sole purpose 
              of aiding the player in their games.
          </small>
        </footer>
      </div>
  );
}

export default App;
