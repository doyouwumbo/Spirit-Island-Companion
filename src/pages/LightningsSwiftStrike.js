import { Box, Stack, Typography } from "@mui/material";
import {React, useRef} from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import LightningFront from '../assets/spirits/lightning/LightningFront.png';
import LightningBack from '../assets/spirits/lightning/LightningBack.png';
import ShatterHomesteads from '../assets/spirits/lightning/ShatterHomesteads.png';
import RagingStorm from '../assets/spirits/lightning/RagingStorm.png';
import LightningsBoon from '../assets/spirits/lightning/LightningsBoon.png';
import Harbingers from '../assets/spirits/lightning/Harbingers.png';
import Immense from '../assets/spirits/lightning/Immense.png'; 
import Pandemonium from '../assets/spirits/lightning/Pandemonium.png';
import Wind from '../assets/spirits/lightning/Wind.png';

export function LightningsSwiftStrike() {

  const ref = useRef();

  return(
    <Box sx={{minWidth: "700px", display: "flex", justifyContent: 'center', alignItems: "center", textAlign: 'center', flexDirection: 'column'}}>
      <Typography sx={{fontSize: '16px', color: '#9a7c2b'}}>(You can {isMobile ? "tap" : "click"} on the spirit card to flip it over!)</Typography>
      {/* Spirit Character Card */}
        <Flippy
        flipOnHover={false}
        flipOnClick={true}
        flipDirection="horizontal"
        ref={ref}
        
        >
          <FrontSide style={{padding: '0px', boxShadow: 'none'}}>
            <img alt='card front' src={LightningFront} style={{width: '650px'}}/>
          </FrontSide>
          <BackSide style={{padding: '0px', boxShadow: 'none'}}>
            <img alt="" src={LightningBack} style={{width: '650px'}}/>
          </BackSide>
        </Flippy>
        

      {/* Unique spirit cards */}

      <BrowserView>
          <Typography sx={{fontSize: '32px', mt: '25px'}}><b>Unique Power Cards</b></Typography>
          <Stack direction="row" spacing={3} sx={{justifyContent: 'center'}}>
            <img alt="ShatterHomesteads" src={ShatterHomesteads} style={{width: '200px'}} />
            <img alt="RagingStorm" src={RagingStorm} style={{width: '200px'}} />
            <img alt="LightningsBoon" src={LightningsBoon} style={{width: '200px'}} />
            <img alt="Harbingers" src={Harbingers} style={{width: '200px'}} />
          </Stack>
          <Typography sx={{fontSize: '32px', mt: '25px'}}><b>Aspects</b></Typography>
          <Stack direction="row" spacing={3} sx={{justifyContent: 'center', mb: '25px'}}>
            <img alt="Immense" src={Immense} style={{width: '350px'}} />
            <img alt="Pandemonium" src={Pandemonium} style={{width: '350px'}} />
            <img alt="Wind" src={Wind} style={{width: '350px'}} />
          </Stack>
      </BrowserView>


      <MobileView>
        <Typography sx={{fontSize: '32px', mt: '10px'}}><b>Unique Power Cards</b></Typography>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center'}}>
          <img alt="ShatterHomesteads" src={ShatterHomesteads} style={{width: '200px'}} />
          <img alt="RagingStorm" src={RagingStorm} style={{width: '200px'}} />
        </Stack>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center'}}>
          <img alt="LightningsBoon" src={LightningsBoon} style={{width: '200px'}} />
          <img alt="Harbingers" src={Harbingers} style={{width: '200px'}} />
        </Stack>
        <Typography sx={{fontSize: '32px', mt: '10px'}}><b>Aspects</b></Typography>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center', mb: '10px'}}>
          <img alt="Immense" src={Immense} style={{width: '275px'}} />
          <img alt="Pandemonium" src={Pandemonium} style={{width: '275px'}} />
        </Stack>
        <Box sx={{mt: '10px', justifyContent: 'center', mb: '10px'}}>
          <img alt="Wind" src={Wind} style={{width: '275px'}} />
        </Box>
      </MobileView>
    </Box>
  );
}