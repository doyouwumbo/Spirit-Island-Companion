import {React, useState} from "react";
import {ToggleButtonGroup, ToggleButton} from '@mui/material';
import {AppBar} from '@mui/material';
import {Toolbar} from '@mui/material';
import { Box } from "@mui/system";
import {useNavigate} from "react-router-dom";
import Logo from "../assets/img/logo_spirit-island.png";
import '../index.css';

export function Navbar() {

  const navigate = useNavigate();

  const [page, setPage] = useState('element-tracker');

  return (
    <Box sx={{ml: '10px', mt: '10px', mb: '10px', pr:'10px', minWidth: '600px'}}>
      <AppBar position="sticky" sx={{background: "transparent", boxShadow: 0}}>
        <Toolbar>
          <Box>
            <img alt="Spirit Island Logo" draggable="false" className="no-select" style={{width: "175px"}} src={Logo} />
          </Box>
          <Box sx={{ml: '20px', overflow: 'auto'}}>
            <ToggleButtonGroup exclusive aria-label="current page toggled" value={page} onChange={(event, newPage) => {
              if (newPage !== null) {
                setPage(newPage);
                event.preventDefault()
                navigate('/' + newPage);
              }
            }} sx={{}}>
              <ToggleButton sx={{border: 0, mr: '20px'}} value='element-tracker' aria-label='element-tracker'>Element Tracker</ToggleButton>
              <ToggleButton sx={{border: 0, mr: '20px'}} value='welcome' aria-label='welcome'>Another feature</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}