import { Box, Stack } from "@mui/material";
import {React, useRef} from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { BrowserView, MobileView } from 'react-device-detect';
import RiverFront from '../assets/spirits/river/RiverFront.png';
import RiverBack from '../assets/spirits/river/RiverBack.png';
import FlashFloods from '../assets/spirits/river/FlashFloods.png';

export function RiverSurgesInSunlight() {

  const ref = useRef();

  return(
    <Box sx={{minWidth: "700px", display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: 'column'}}>

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
      <Stack direction="row" spacing={3} sx={{mt: '25px'}}>
        <img alt="flash floods" src={FlashFloods} style={{width: '200px'}} />
        <img alt="flash floods" src={FlashFloods} style={{width: '200px'}} />
        <BrowserView>
          <img alt="flash floods" src={FlashFloods} style={{width: '200px'}} />
          <img alt="flash floods" src={FlashFloods} style={{width: '200px'}} />
        </BrowserView>
      </Stack>
      <MobileView>
        <Stack direction="row" spacing={3} sx={{mt: '10px'}}>
          <img alt="flash floods" src={FlashFloods} style={{width: '200px'}} />
          <img alt="flash floods" src={FlashFloods} style={{width: '200px'}} />
        </Stack>
      </MobileView>
    </Box>
  );
}