import logo from './logo.svg';
import './App.css';
import { Welcome } from './pages/welcome';
import {Navbar} from './components/navbar';
import {Router} from "react-router-dom";
import {ElementTracker} from "./pages/ElementTracker"

function App() {
  return (
    <div>
      <Navbar />
      {/* <Welcome /> */}
      <ElementTracker />
    </div>
  );
}

export default App;
