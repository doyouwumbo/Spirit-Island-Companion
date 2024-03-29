import { Box, Stack, Typography } from "@mui/material";
import {React, useRef} from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import { HoverGrow } from "../components/HoverGrow";
import VitalFront from '../assets/spirits/vital/VitalFront.png';
import VitalBack from '../assets/spirits/vital/VitalBack.png';
import AYearOfPerfectStillness from '../assets/spirits/vital/AYearOfPerfectStillness.png';
import RitualsOfDestruction from '../assets/spirits/vital/RitualsOfDestruction.png';
import GuardTheHealingLand from '../assets/spirits/vital/GuardTheHealingLand.png';
import DrawOfTheFruitfulEarth from '../assets/spirits/vital/DrawOfTheFruitfulEarth.png';
import Resilience from '../assets/spirits/vital/Resilience.png'; 
import Might from '../assets/spirits/vital/Might.png';

export function VitalStrengthOfTheEarth() {

  const ref = useRef();

  window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ba9d82; transition: background-color 3s;'})

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
            <img alt='card front' src={VitalFront} style={{width: '650px'}}/>
          </FrontSide>
          <BackSide style={{padding: '0px', boxShadow: 'none'}}>
            <img alt="" src={VitalBack} style={{width: '650px'}}/>
          </BackSide>
        </Flippy>
        

      {/* Unique spirit cards */}

      <BrowserView>
          <Typography sx={{fontSize: '32px', mt: '25px'}}><b>Unique Power Cards</b></Typography>
          <Stack direction="row" spacing={3} sx={{justifyContent: 'center'}}>
            <HoverGrow><img alt="AYearOfPerfectStillness" src={AYearOfPerfectStillness} style={{width: '200px'}} /></HoverGrow>
            <HoverGrow><img alt="RitualsOfDestruction" src={RitualsOfDestruction} style={{width: '200px'}} /></HoverGrow>
            <HoverGrow><img alt="GuardTheHealingLand" src={GuardTheHealingLand} style={{width: '200px'}} /></HoverGrow>
            <HoverGrow><img alt="DrawOfTheFruitfulEarth" src={DrawOfTheFruitfulEarth} style={{width: '200px'}} /></HoverGrow>
          </Stack>
          <Typography sx={{fontSize: '32px', mt: '25px'}}><b>Aspects</b></Typography>
          <Stack direction="row" spacing={3} sx={{justifyContent: 'center', mb: '25px'}}>
            <HoverGrow translateUp={100}><img alt="Resilience" src={Resilience} style={{width: '350px'}} /></HoverGrow>
            <HoverGrow translateUp={100}><img alt="Might" src={Might} style={{width: '350px'}} /></HoverGrow>
          </Stack>
      </BrowserView>


      <MobileView>
        <Typography sx={{fontSize: '32px', mt: '10px'}}><b>Unique Power Cards</b></Typography>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center'}}>
          <img alt="AYearOfPerfectStillness" src={AYearOfPerfectStillness} style={{width: '200px'}} />
          <img alt="RitualsOfDestruction" src={RitualsOfDestruction} style={{width: '200px'}} />
        </Stack>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center'}}>
          <img alt="GuardTheHealingLand" src={GuardTheHealingLand} style={{width: '200px'}} />
          <img alt="DrawOfTheFruitfulEarth" src={DrawOfTheFruitfulEarth} style={{width: '200px'}} />
        </Stack>
        <Typography sx={{fontSize: '32px', mt: '10px'}}><b>Aspects</b></Typography>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center', mb: '10px'}}>
          <img alt="Resilience" src={Resilience} style={{width: '275px'}} />
          <img alt="Might" src={Might} style={{width: '275px'}} />
        </Stack>
      </MobileView>
    </Box>
  );
}