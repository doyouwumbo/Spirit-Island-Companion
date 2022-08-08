import { Box, Stack, Typography } from "@mui/material";
import {React, useRef} from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import { HoverGrow } from "../components/HoverGrow";
import RampantFront from '../assets/spirits/rampant/RampantFront.jpg';
import RampantBack from '../assets/spirits/rampant/RampantBack.jpg';
import OvergrowInANight from '../assets/spirits/rampant/OvergrowInANight.png';
import FieldsChokedWithGrowth from '../assets/spirits/rampant/FieldsChokedWithGrowth.png';
import GiftOfProliferation from '../assets/spirits/rampant/GiftOfProliferation.png';
import StemTheFlowOfFreshWater from '../assets/spirits/rampant/StemTheFlowOfFreshWater.png';

export function RampantSpreadOfGreen() {

  const ref = useRef();
  
  window.requestAnimationFrame(()=> { document.body.style = 'background-color: #8acd96; transition: background-color 3s;'})

  return(
    <Box sx={{minWidth: "700px", display: "flex", justifyContent: 'center', alignItems: "center", textAlign: 'center', flexDirection: 'column'}}>
      <Typography sx={{fontSize: '16px', color: 'black'}}>
        (You can {isMobile ? "tap" : "click"} on the spirit card to flip it over! {!isMobile ? "Hover over a spirit's card to make it bigger!" : ""})
      </Typography>
      {/* Spirit Character Card */}
        <Flippy
        flipOnHover={false}
        flipOnClick={true}
        flipDirection="horizontal"
        ref={ref}
        
        >
          <FrontSide style={{padding: '0px', boxShadow: 'none'}}>
            <img alt='card front' src={RampantFront} style={{width: '650px'}}/>
          </FrontSide>
          <BackSide style={{padding: '0px', boxShadow: 'none'}}>
            <img alt="" src={RampantBack} style={{width: '650px'}}/>
          </BackSide>
        </Flippy>
        

      {/* Unique spirit cards */}

      <BrowserView>
          <Typography sx={{fontSize: '32px', mt: '25px'}}><b>Unique Power Cards</b></Typography>
          <Stack direction="row" spacing={3} sx={{justifyContent: 'center'}}>
            <HoverGrow translateUp={100}><img alt="flash floods" src={OvergrowInANight} style={{width: '200px'}} /></HoverGrow>
            <HoverGrow translateUp={100}><img alt="wash away" src={FieldsChokedWithGrowth} style={{width: '200px'}} /></HoverGrow>
            <HoverGrow translateUp={100}><img alt="boon of vigor" src={GiftOfProliferation} style={{width: '200px'}} /></HoverGrow>
            <HoverGrow translateUp={100}><img alt="rivers bounty" src={StemTheFlowOfFreshWater} style={{width: '200px'}} /></HoverGrow>
          </Stack>
      </BrowserView>


      <MobileView>
        <Typography sx={{fontSize: '32px', mt: '10px'}}><b>Unique Power Cards</b></Typography>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center'}}>
          <img alt="flash floods" src={OvergrowInANight} style={{width: '200px'}} />
          <img alt="wash away" src={FieldsChokedWithGrowth} style={{width: '200px'}} />
        </Stack>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center'}}>
          <img alt="boon of vigor" src={GiftOfProliferation} style={{width: '200px'}} />
          <img alt="rivers bounty" src={StemTheFlowOfFreshWater} style={{width: '200px'}} />
        </Stack>
      </MobileView>
    </Box>
  );
}