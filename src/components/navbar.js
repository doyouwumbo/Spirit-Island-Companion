import {React, useState, useEffect} from "react";
import {ToggleButtonGroup, ToggleButton} from '@mui/material';
import {AppBar} from '@mui/material';
import {Toolbar} from '@mui/material';
import { Box, styled } from "@mui/system";
import {useNavigate} from "react-router-dom";
import Logo from "../assets/img/logo_spirit-island.png";
import '../index.css';

export function Navbar() {

  const navigate = useNavigate();
  const tokens = window.location.pathname.split("/");
  console.log()

  const [page, setPage] = useState(() => {
    return tokens[2];
  });

  const NavButton = styled(ToggleButton)({
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
    marginRight: 20,
    borderRadius: 0
  });

  useEffect(() => {
    setPage(tokens[2]);
  }, [page, tokens])

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
              } else {
                event.preventDefault()
                navigate('/' + page);
              }
            }}>
              <NavButton value='element-tracker' aria-label='element-tracker'><b>Element Tracker</b></NavButton>
              <NavButton value='spirits' aria-label='spirits'><b>Spirits</b></NavButton>
            </ToggleButtonGroup>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}