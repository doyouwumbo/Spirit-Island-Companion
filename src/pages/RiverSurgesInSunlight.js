import { Box, Stack, Typography } from "@mui/material";
import {React, useRef} from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import RiverFront from '../assets/spirits/river/RiverFront.png';
import RiverBack from '../assets/spirits/river/RiverBack.png';
import FlashFloods from '../assets/spirits/river/FlashFloods.png';
import WashAway from '../assets/spirits/river/WashAway.png';
import BoonOfVigor from '../assets/spirits/river/BoonOfVigor.png';
import RiversBounty from '../assets/spirits/river/RiversBounty.png';
import Sunshine from '../assets/spirits/river/Sunshine.png'; 
import Travel from '../assets/spirits/river/Travel.png';

export function RiverSurgesInSunlight() {

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
            <img alt='card front' src={RiverFront} style={{width: '650px'}}/>
          </FrontSide>
          <BackSide style={{padding: '0px', boxShadow: 'none'}}>
            <img alt="" src={RiverBack} style={{width: '650px'}}/>
          </BackSide>
        </Flippy>
        

      {/* Unique spirit cards */}

      <BrowserView>
          <Typography sx={{fontSize: '32px', mt: '25px'}}>Unique Power Cards</Typography>
          <Stack direction="row" spacing={3} sx={{justifyContent: 'center'}}>
            <img alt="flash floods" src={FlashFloods} style={{width: '200px'}} />
            <img alt="wash away" src={WashAway} style={{width: '200px'}} />
            <img alt="boon of vigor" src={BoonOfVigor} style={{width: '200px'}} />
            <img alt="rivers bounty" src={RiversBounty} style={{width: '200px'}} />
          </Stack>
          <Typography sx={{fontSize: '32px', mt: '25px'}}>Aspects</Typography>
          <Stack direction="row" spacing={3} sx={{justifyContent: 'center', mb: '25px'}}>
            <img alt="sunshine" src={Sunshine} style={{width: '350px'}} />
            <img alt="travel" src={Travel} style={{width: '350px'}} />
          </Stack>
      </BrowserView>


      <MobileView>
        <Typography sx={{fontSize: '32px', mt: '10px'}}>Unique Power Cards</Typography>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center'}}>
          <img alt="flash floods" src={FlashFloods} style={{width: '200px'}} />
          <img alt="wash away" src={WashAway} style={{width: '200px'}} />
        </Stack>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center'}}>
          <img alt="boon of vigor" src={BoonOfVigor} style={{width: '200px'}} />
          <img alt="rivers bounty" src={RiversBounty} style={{width: '200px'}} />
        </Stack>
        <Typography sx={{fontSize: '32px', mt: '10px'}}>Aspects</Typography>
        <Stack direction="row" spacing={3} sx={{mt: '10px', justifyContent: 'center', mb: '10px'}}>
          <img alt="sunshine" src={Sunshine} style={{width: '275px'}} />
          <img alt="travel" src={Travel} style={{width: '275px'}} />
        </Stack>
      </MobileView>
    </Box>
  );
}