import { Box } from "@mui/material";
import {React, useRef} from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import RiverFront from '../assets/spirits/RiverFront.png';
import RiverBack from '../assets/spirits/RiverBack.png';

export function RiverSurgesInSunlight() {

  const ref = useRef();

  return(
    <Box sx={{minWidth: "600px", display: "flex", alignItems: "center", flexDirection: 'column', margin: 'auto'}}>
      
      <Flippy
      flipOnHover={false}
      flipOnClick={true}
      flipDirection="horizontal"
      ref={ref}
      >
        <FrontSide style={{padding: '0px', boxShadow: 'none'}}>
          <img alt='card front' src={RiverFront} style={{width: '600px'}}/>
        </FrontSide>
        <BackSide style={{padding: '0px', boxShadow: 'none'}}>
        <img alt="" src={RiverBack} style={{width: '600px'}}/>
        </BackSide>
      </Flippy>
    </Box>
  );
}