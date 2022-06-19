import logo from './logo.svg';
import './App.css';
import { Welcome } from './pages/welcome';
import {Navbar} from './components/navbar';
import {Router} from "react-router-dom";
import {ElementTracker} from "./pages/ElementTracker";
import {Box} from "@mui/material";

function App() {
  return (
    <Box sx={{display: "flex", border: 1, flexGrow: "true", justifyContent: "center", alignItems: "center"}} >
      {/* <Navbar /> */}
      {/* <Welcome /> */}
      <ElementTracker />
    </Box>
  );
}

export default App;
