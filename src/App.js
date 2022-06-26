import './App.css';
import { Welcome } from './pages/welcome';
import {Navbar} from './components/navbar';
import {ElementTracker} from "./pages/ElementTracker";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";

function App() {
  return (
      <Router basename="/Spirit-Island-Companion">
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Navigate to="/element-tracker" />} />
              <Route path="/welcome" element={<Welcome />}/>
              <Route path="/element-tracker" element={<ElementTracker />} />
            </Routes>
      </Router>
  );
}

export default App;
