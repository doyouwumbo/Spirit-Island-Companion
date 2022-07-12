import { Box, Stack, Typography } from "@mui/material";
import {React, useRef} from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import OceanFront from '../assets/spirits/ocean/OceanFront.jpg';
import OceanBack from '../assets/spirits/ocean/OceanBack.jpg';
import CallOfTheDeeps from '../assets/spirits/ocean/CallOfTheDeeps.png';
import GraspingTide from '../assets/spirits/ocean/GraspingTide.png';
import Swallow from '../assets/spirits/ocean/Swallow.png';
import TidalBoon from '../assets/spirits/ocean/TidalBoon.png';

export function OceansHungryGrasp() {

  const ref = useRef();
  
  window.requestAnimationFrame(()=> { document.body.style = 'background-color: #84b2b7; transition: background-color 3s;'})

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
            <img alt='card front' src={OceanFront} style={{width: '650px'}}/>
          </FrontSide>
          <BackSide style={{padding: '0px', boxShadow: 'none'}}>
            <img alt="" src={OceanBack} style={{width: '650px'}}/>
          </BackSide>
        </Flippy>
        

      {/* Unique spirit cards */}

      <BrowserView>
          <Typography sx={{fontSize: '32px', mt: '25px'}}><b>Unique Power Cards</b></Typography>
          <Stack direction="row" spacing={3} sx={{justifyContent: 'center'}}>
            <img alt="flash floods" src={CallOfTheDeeps} style={{width: '200px'}} />
            <img alt="wash away" src={GraspingTide} style={{width: '200px'}} />
            <img alt="boon of vigor" src={Swallow} style={{width: '200px'}} />
            <img alt="rivers bounty" src={TidalBoon} style={{width: '200px'}} />
          </Stack>
      </BrowserView>


      <MobileView>
        <Typography sx={{fontSize: '32px', mt: '10px'}}><b>Unique Power Cards</b></Typography>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center'}}>
          <img alt="flash floods" src={CallOfTheDeeps} style={{width: '200px'}} />
          <img alt="wash away" src={GraspingTide} style={{width: '200px'}} />
        </Stack>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center'}}>
          <img alt="boon of vigor" src={Swallow} style={{width: '200px'}} />
          <img alt="rivers bounty" src={TidalBoon} style={{width: '200px'}} />
        </Stack>
      </MobileView>
    </Box>
  );
}