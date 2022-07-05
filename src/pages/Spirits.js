import { Box, Button, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";
import {isMobile} from 'react-device-detect'
import RiverProfile from '../assets/spirits/river/profile.png';
import LightningProfile from '../assets/spirits/lightning/profile.png';
import ShadowProfile from '../assets/spirits/shadows/profile.png'
import VitalProfile from '../assets/spirits/vital/profile.png'
import "../index.css";
import { useNavigate } from "react-router-dom";

export function Spirits() {

  const navigate = useNavigate();

  const space = ifMobile();

  function handleClick(name) {
    navigate('/spirits/' + name);
  }

  const SpiritStack = styled(Stack)({  
    width: '300px', 
    height: '200px', 
    justifyContent: 'center', 
    alignItems: 'center',
  })

  function ifMobile() {
    console.log(isMobile)
    if (isMobile) {
      return 6;
    }
    return 15
  }

  return (
    <Box sx={{minWidth: "700px", display: "flex", alignItems: "center", flexDirection: 'column', margin: 'auto'}}>
      <Stack direction="row" spacing={space}>

        {/* River Surges In Sunlight */}
        <SpiritStack sx={{border: 1, borderWidth: 3, borderRadius: 4, backgroundColor: '#40b296'}}>
          <Button
          onClick={() => {
            handleClick('river-surges-in-sunlight')
          }}
          >
            <img alt="river" src={RiverProfile} style={{maxWidth: '150px', borderRadius: 16}} />
          </Button>
          <Typography><b>RIVER SURGES IN SUNLIGHT</b></Typography>
        </SpiritStack>

        {/* Lightning's Swift Strike */}
        <SpiritStack sx={{border: 1, borderWidth: 3, borderRadius: 4, backgroundColor: '#fd822f'}}>
          <Button
          onClick={() => {
            handleClick('lightnings-swift-strike')
          }}
          >
            <img alt="lightning" src={LightningProfile} style={{maxWidth: '150px', borderRadius: 16}} />
          </Button>
          <Typography><b>LIGHTNING'S SWIFT STRIKE</b></Typography>
        </SpiritStack>
      </Stack>

      <Stack direction="row" spacing={space} sx={{mt: '25px'}}>

        {/* Shadows Flicker Like Flame */}
        <SpiritStack sx={{border: 1, borderWidth: 3, borderRadius: 4, backgroundColor: '#57868c'}}>
          <Button
          onClick={() => {
            handleClick('shadows-flicker-like-flames')
          }}
          >
            <img alt="shadow" src={ShadowProfile} style={{maxWidth: '150px', borderRadius: 16}} />
          </Button>
          <Typography><b>SHADOWS FLICKER LIKE FLAME</b></Typography>
        </SpiritStack>

        {/* Vital Strength of the Earth */}
        <SpiritStack sx={{border: 1, borderWidth: 3, borderRadius: 4, backgroundColor: '#b8906c'}}>
          <Button
          onClick={() => {
            handleClick('vital-strength-of-the-earth')
          }}
          >
            <img alt="vital" src={VitalProfile} style={{maxWidth: '150px', borderRadius: 16}} />
          </Button>
          <Typography><b>VITAL STRENGTH OF THE EARTH</b></Typography>
        </SpiritStack>

      </Stack>
    </Box>
  );
}