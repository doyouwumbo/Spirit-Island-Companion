import React from "react";
import {Typography} from '@mui/material';
import {AppBar} from '@mui/material';
import {Toolbar} from '@mui/material';
import { Box } from "@mui/system";

export function Navbar() {
  return (
    <Box sx={{ml: '10px', mt: '10px', mb: '40px', pr:'10px', minWidth: '600px'}}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography>
            Future feature
          </Typography>  
        </Toolbar>
      </AppBar>
    </Box>
  );
}