import { Box, Stack, Typography } from "@mui/material";
import {React, useRef} from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import { HoverGrow } from "../components/HoverGrow";
import ShadowFront from '../assets/spirits/shadows/ShadowFront.png';
import ShadowBack from '../assets/spirits/shadows/ShadowBack.png';
import FavorsCalledDue from '../assets/spirits/shadows/FavorsCalledDue.png';
import ConcealingShadows from '../assets/spirits/shadows/ConcealingShadows.png';
import CropsWitherAndFade from '../assets/spirits/shadows/CropsWitherAndFade.png';
import MantleOfDread from '../assets/spirits/shadows/MantleOfDread.png';
import Foreboding from '../assets/spirits/shadows/Foreboding.png'; 
import Madness from '../assets/spirits/shadows/Madness.png';
import Amorphous from '../assets/spirits/shadows/Amorphous.png';
import Reach from '../assets/spirits/shadows/Reach.png';

export function ShadowsFlickerLikeFlame() {

  const ref = useRef();

  window.requestAnimationFrame(()=> { document.body.style = 'background-color: #768a8c; transition: background-color 3s;'})

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
            <img alt='card front' src={ShadowFront} style={{width: '650px'}}/>
          </FrontSide>
          <BackSide style={{padding: '0px', boxShadow: 'none'}}>
            <img alt="" src={ShadowBack} style={{width: '650px'}}/>
          </BackSide>
        </Flippy>
        

      {/* Unique spirit cards */}

      <BrowserView>
          <Typography sx={{fontSize: '32px', mt: '25px'}}><b>Unique Power Cards</b></Typography>
          <Stack direction="row" spacing={3} sx={{justifyContent: 'center'}}>
            <HoverGrow><img alt="FavorsCalledDue" src={FavorsCalledDue} style={{width: '200px'}} /></HoverGrow>
            <HoverGrow><img alt="ConcealingShadows" src={ConcealingShadows} style={{width: '200px'}} /></HoverGrow>
            <HoverGrow><img alt="CropsWitherAndFade" src={CropsWitherAndFade} style={{width: '200px'}} /></HoverGrow>
            <HoverGrow><img alt="MantleOfDread" src={MantleOfDread} style={{width: '200px'}} /></HoverGrow>
          </Stack>
          <Typography sx={{fontSize: '32px', mt: '25px'}}><b>Aspects</b></Typography>
          <Stack direction="row" spacing={3} sx={{justifyContent: 'center', mb: '25px'}}>
            <HoverGrow translate={100}><img alt="Foreboding" src={Foreboding} style={{width: '350px'}} /></HoverGrow>
            <HoverGrow translate={100}><img alt="Madness" src={Madness} style={{width: '350px'}} /></HoverGrow>
            <HoverGrow translate={100}><img alt="Amorphous" src={Amorphous} style={{width: '350px'}} /></HoverGrow>
            <HoverGrow translate={100}><img alt="Reach" src={Reach} style={{width: '350px'}} /></HoverGrow>
          </Stack>
      </BrowserView>


      <MobileView>
        <Typography sx={{fontSize: '32px', mt: '10px'}}><b>Unique Power Cards</b></Typography>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center'}}>
          <img alt="FavorsCalledDue" src={FavorsCalledDue} style={{width: '200px'}} />
          <img alt="ConcealingShadows" src={ConcealingShadows} style={{width: '200px'}} />
        </Stack>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center'}}>
          <img alt="CropsWitherAndFade" src={CropsWitherAndFade} style={{width: '200px'}} />
          <img alt="MantleOfDread" src={MantleOfDread} style={{width: '200px'}} />
        </Stack>
        <Typography sx={{fontSize: '32px', mt: '10px'}}><b>Aspects</b></Typography>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center', mb: '10px'}}>
          <img alt="Foreboding" src={Foreboding} style={{width: '275px'}} />
          <img alt="Madness" src={Madness} style={{width: '275px'}} />
        </Stack>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center', mb: '10px'}}>
          <img alt="Amorphous" src={Amorphous} style={{width: '275px'}} />
          <img alt="Reach" src={Reach} style={{width: '275px'}} />
        </Stack>
      </MobileView>
    </Box>
  );
}