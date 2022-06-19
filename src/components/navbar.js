import React from "react";
import {Typography} from '@mui/material';
import {AppBar} from '@mui/material';
import {Toolbar} from '@mui/material';

export function Navbar() {
  return (
    <AppBar position="sticky" sx={{maxWidth: '98.9%', margin: '10px', mb: '50px'}}>
      <Toolbar>
        <Typography>
          Future feature
        </Typography>  
      </Toolbar>
    </AppBar>
  );
}