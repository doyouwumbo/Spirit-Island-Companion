import { Box, Button, Typography, Stack, Fade } from "@mui/material";
import { styled } from "@mui/system";
import {isMobile} from 'react-device-detect';
import RiverProfile from '../assets/spirits/river/profile.png';
import LightningProfile from '../assets/spirits/lightning/profile.png';
import ShadowProfile from '../assets/spirits/shadows/profile.png';
import VitalProfile from '../assets/spirits/vital/profile.png';
import ThunderspeakerProfile from '../assets/spirits/thunderspeaker/profile.png';
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

  window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'});

  return (
    <Box sx={{minWidth: "700px", display: "flex", alignItems: "center", flexDirection: 'column', margin: 'auto'}}>
      <Stack direction="row" spacing={space}>

        {/* River Surges In Sunlight */}
        <Fade in={true} style={{transitionDelay: "0.2s"}}>
          <SpiritStack sx={{border: 1, borderWidth: 3, borderRadius: 4, backgroundColor: '#7fb5a8'}}>
            <Button
            onClick={() => {
              handleClick('river-surges-in-sunlight')
            }}
            onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #7fb5a8; transition: background-color 3s;'})}}
            onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
            >
              <img alt="river" src={RiverProfile} style={{maxWidth: '150px', borderRadius: 16}} />
            </Button>
            <Typography><b>RIVER SURGES IN SUNLIGHT</b></Typography>
          </SpiritStack>
        </Fade>

        {/* Lightning's Swift Strike */}
        <Fade in={true} style={{transitionDelay: "0.3s"}}>
          <SpiritStack sx={{border: 1, borderWidth: 3, borderRadius: 4, backgroundColor: '#ffa163'}}>
            <Button
            onClick={() => {
              handleClick('lightnings-swift-strike')
            }}
            onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffa163; transition: background-color 3s;'})}}
            onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
            >
              <img alt="lightning" src={LightningProfile} style={{maxWidth: '150px', borderRadius: 16}} />
            </Button>
            <Typography><b>LIGHTNING'S SWIFT STRIKE</b></Typography>
          </SpiritStack>
        </Fade>
      </Stack>
        
      <Stack direction="row" spacing={space} sx={{mt: '25px'}}>

        {/* Shadows Flicker Like Flame */}
        <Fade in={true} style={{transitionDelay: "0.4s"}}>
          <SpiritStack sx={{border: 1, borderWidth: 3, borderRadius: 4, backgroundColor: '#768a8c'}}>
            <Button
            onClick={() => {
              handleClick('shadows-flicker-like-flames')
            }}
            onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #768a8c; transition: background-color 3s;'})}}
            onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
            >
              <img alt="shadow" src={ShadowProfile} style={{maxWidth: '150px', borderRadius: 16}} />
            </Button>
            <Typography><b>SHADOWS FLICKER LIKE FLAME</b></Typography>
          </SpiritStack>
        </Fade>

        {/* Vital Strength of the Earth */}
        <Fade in={true} style={{transitionDelay: "0.5s"}}>
          <SpiritStack sx={{border: 1, borderWidth: 3, borderRadius: 4, backgroundColor: '#ba9d82'}}>
            <Button
            onClick={() => {
              handleClick('vital-strength-of-the-earth')
            }}
            onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ba9d82; transition: background-color 3s;'})}}
            onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
            >
              <img alt="vital" src={VitalProfile} style={{maxWidth: '150px', borderRadius: 16}} />
            </Button>
            <Typography><b>VITAL STRENGTH OF THE EARTH</b></Typography>
          </SpiritStack>
        </Fade>

      </Stack>

      <Stack direction="row" spacing={space} sx={{mt: '25px'}}>

        {/* Thunderspeaker */}
        <Fade in={true} style={{transitionDelay: "0.6s"}}>
          <SpiritStack sx={{border: 1, borderWidth: 3, borderRadius: 4, backgroundColor: '#588463'}}>
            <Button
            onClick={() => {
              handleClick('thunderspeaker')
            }}
            onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #588463; transition: background-color 3s;'})}}
            onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
            >
              <img alt="vital" src={ThunderspeakerProfile} style={{maxWidth: '150px', borderRadius: 16}} />
            </Button>
            <Typography><b>THUNDERSPEAKER</b></Typography>
          </SpiritStack>
        </Fade>
      </Stack>

    </Box>
  );
}