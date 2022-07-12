import { Box, Stack, Typography } from "@mui/material";
import {React, useRef} from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import BringerFront from '../assets/spirits/bringer/BringerFront.jpg';
import BringerBack from '../assets/spirits/bringer/BringerBack.jpg';
import DreadApparitions from '../assets/spirits/bringer/DreadApparitions.png';
import DreamsOfTheDahan from '../assets/spirits/bringer/DreamsOfTheDahan.png';
import CallOnMidnightsDream from '../assets/spirits/bringer/CallOnMidnightsDream.png';
import PredatoryNightmares from '../assets/spirits/bringer/PredatoryNightmares.png';

export function BringerOfDreamsAndNightmares() {

  const ref = useRef();
  
  window.requestAnimationFrame(()=> { document.body.style = 'background-color: #575e74; transition: background-color 3s;'})

  return(
    <Box sx={{minWidth: "700px", display: "flex", justifyContent: 'center', alignItems: "center", textAlign: 'center', flexDirection: 'column'}}>
      <Typography sx={{fontSize: '16px', color: 'black'}}>(You can {isMobile ? "tap" : "click"} on the spirit card to flip it over!)</Typography>
      {/* Spirit Character Card */}
        <Flippy
        flipOnHover={false}
        flipOnClick={true}
        flipDirection="horizontal"
        ref={ref}
        
        >
          <FrontSide style={{padding: '0px', boxShadow: 'none'}}>
            <img alt='card front' src={BringerFront} style={{width: '650px'}}/>
          </FrontSide>
          <BackSide style={{padding: '0px', boxShadow: 'none'}}>
            <img alt="" src={BringerBack} style={{width: '650px'}}/>
          </BackSide>
        </Flippy>
        

      {/* Unique spirit cards */}

      <BrowserView>
          <Typography sx={{fontSize: '32px', mt: '25px'}}><b>Unique Power Cards</b></Typography>
          <Stack direction="row" spacing={3} sx={{justifyContent: 'center'}}>
            <img alt="flash floods" src={DreadApparitions} style={{width: '200px'}} />
            <img alt="wash away" src={DreamsOfTheDahan} style={{width: '200px'}} />
            <img alt="boon of vigor" src={CallOnMidnightsDream} style={{width: '200px'}} />
            <img alt="rivers bounty" src={PredatoryNightmares} style={{width: '200px'}} />
          </Stack>
      </BrowserView>


      <MobileView>
        <Typography sx={{fontSize: '32px', mt: '10px'}}><b>Unique Power Cards</b></Typography>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center'}}>
          <img alt="flash floods" src={DreadApparitions} style={{width: '200px'}} />
          <img alt="wash away" src={DreamsOfTheDahan} style={{width: '200px'}} />
        </Stack>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center'}}>
          <img alt="boon of vigor" src={CallOnMidnightsDream} style={{width: '200px'}} />
          <img alt="rivers bounty" src={PredatoryNightmares} style={{width: '200px'}} />
        </Stack>
      </MobileView>
    </Box>
  );
}