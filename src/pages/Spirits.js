import { Box, Stack } from "@mui/material";
import {isMobile, BrowserView, MobileView} from 'react-device-detect';
import { SpiritListCard } from "../components/SpiritListCard";
import RiverCard from '../assets/spirits/river/card.jpg'
import LightningProfile from '../assets/spirits/lightning/card.jpg';
import ShadowProfile from '../assets/spirits/shadows/card.jpg';
import VitalProfile from '../assets/spirits/vital/card.jpg';
import ThunderspeakerProfile from '../assets/spirits/thunderspeaker/card.jpg';
import RampantProfile from '../assets/spirits/rampant/card.jpg';
import BringerProfile from '../assets/spirits/bringer/card.jpg';
import OceanProfile from '../assets/spirits/ocean/card.jpg';
import "../index.css";

export function Spirits() {

  const space = ifMobile();

  function ifMobile() {
    if (isMobile) {
      return 6;
    }
    return 15
  }

  // Set the background color of the webpage back to default
  window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'});

  return (
  
    <Box sx={{minWidth: "700px", display: "flex", alignItems: "center", flexDirection: 'column', margin: 'auto', textAlign: 'center'}}>

      {/* BROWSER VIEW */}
      <BrowserView>
        <Stack direction="row" spacing={space}>

          {/* River Surges In Sunlight */}
          <SpiritListCard spiritName='river-surges-in-sunlight' buttonImage={RiverCard} fade={true} fadeTime='0.2s' />

          {/* Lightning's Swift Strike */}
          <SpiritListCard spiritName='lightnings-swift-strike' buttonImage={LightningProfile} fade={true} fadeTime='0.3s' />

          {/* Shadows Flicker Like Flame */}
          <SpiritListCard spiritName='shadows-flicker-like-flames' buttonImage={ShadowProfile} fade={true} fadeTime='0.4s' />

        </Stack>
          
        <Stack direction="row" spacing={space} sx={{mt: '25px'}}>

          {/* Vital Strength of the Earth */}
          <SpiritListCard spiritName='vital-strength-of-the-earth' buttonImage={VitalProfile} fade={true} fadeTime='0.5s' />

          {/* Thunderspeaker */}
          <SpiritListCard spiritName='thunderspeaker' buttonImage={ThunderspeakerProfile} fade={true} fadeTime='0.6s' />
          
          {/* Rampant Spread of Green */}
          <SpiritListCard spiritName='rampant-spread-of-green' buttonImage={RampantProfile} fade={true} fadeTime='0.7s' />
         
        </Stack>

        <Stack direction="row" spacing={space} sx={{mt: '25px', }}>

          {/* Bringer of Dreams and Nightmares */}
          <SpiritListCard spiritName='bringer-of-dreams-and-nightmares' buttonImage={BringerProfile} fade={true} fadeTime='0.8s' />

          {/* Ocean's Hungry Grasp */}
          <SpiritListCard spiritName='oceans-hungry-grasp' buttonImage={OceanProfile} fade={true} fadeTime='0.9s' />

        </Stack>
      </BrowserView>






      {/* MOBILE VIEW */}
      <MobileView>
        <Stack direction="row" spacing={space}>

          {/* River Surges In Sunlight */}
          <SpiritListCard spiritName='river-surges-in-sunlight' buttonImage={RiverCard} fade={true} fadeTime='0.2s' />

          {/* Lightning's Swift Strike */}
          <SpiritListCard spiritName='lightnings-swift-strike' buttonImage={LightningProfile} fade={true} fadeTime='0.3s' />

        </Stack>
          
        <Stack direction="row" spacing={space} sx={{mt: '25px'}}>

          {/* Shadows Flicker Like Flame */}
          <SpiritListCard spiritName='shadows-flicker-like-flames' buttonImage={ShadowProfile} fade={true} fadeTime='0.4s' />

          {/* Vital Strength of the Earth */}
          <SpiritListCard spiritName='vital-strength-of-the-earth' buttonImage={VitalProfile} fade={true} fadeTime='0.5s' />

        </Stack>

        <Stack direction="row" spacing={space} sx={{mt: '25px'}}>

          {/* Thunderspeaker */}
          <SpiritListCard spiritName='thunderspeaker' buttonImage={ThunderspeakerProfile} fade={true} fadeTime='0.6s' />
          
          {/* Rampant Spread of Green */}
          <SpiritListCard spiritName='rampant-spread-of-green' buttonImage={RampantProfile} fade={true} fadeTime='0.7s' />

        </Stack>

        <Stack direction="row" spacing={space} sx={{mt: '25px'}}>

          {/* Bringer of Dreams and Nightmares */}
          <SpiritListCard spiritName='bringer-of-dreams-and-nightmares' buttonImage={BringerProfile} fade={true} fadeTime='0.8s' />

          {/* Ocean's Hungry Grasp */}
          <SpiritListCard spiritName='oceans-hungry-grasp' buttonImage={OceanProfile} fade={true} fadeTime='0.9s' />

        </Stack>
      </MobileView>
    </Box>
  );
}