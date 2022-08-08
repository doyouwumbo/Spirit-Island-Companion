import { Box, Button, Typography, Stack, Fade } from "@mui/material";
import { styled } from "@mui/system";
import {isMobile, BrowserView, MobileView} from 'react-device-detect';
import RiverCard from '../assets/spirits/river/card.jpg'
import LightningProfile from '../assets/spirits/lightning/card.jpg';
import ShadowProfile from '../assets/spirits/shadows/card.jpg';
import VitalProfile from '../assets/spirits/vital/card.jpg';
import ThunderspeakerProfile from '../assets/spirits/thunderspeaker/card.jpg';
import RampantProfile from '../assets/spirits/rampant/card.jpg';
import BringerProfile from '../assets/spirits/bringer/card.jpg';
import OceanProfile from '../assets/spirits/ocean/card.jpg';
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
    justifyContent: 'center', 
    alignItems: 'center',
  })

  function ifMobile() {
    if (isMobile) {
      return 6;
    }
    return 15
  }

  window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'});

  return (
  
    <Box sx={{minWidth: "700px", display: "flex", alignItems: "center", flexDirection: 'column', margin: 'auto', textAlign: 'center'}}>

      {/* BROWSER VIEW */}
      <BrowserView>
        <Stack direction="row" spacing={space}>

          {/* River Surges In Sunlight */}
          <Fade in={true} style={{transitionDelay: "0.2s"}}>
            <SpiritStack>
              <Button
              disableRipple
              onClick={() => {
                handleClick('river-surges-in-sunlight')
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #7fb5a8; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="river" src={RiverCard} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography><b>RIVER SURGES IN SUNLIGHT</b></Typography>
            </SpiritStack>
          </Fade>

          {/* Lightning's Swift Strike */}
          <Fade in={true} style={{transitionDelay: "0.3s"}}>
            <SpiritStack>
              <Button
              onClick={() => {
                handleClick('lightnings-swift-strike')
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffa163; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="lightning" src={LightningProfile} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography><b>LIGHTNING'S SWIFT STRIKE</b></Typography>
            </SpiritStack>
          </Fade>

          {/* Shadows Flicker Like Flame */}
          <Fade in={true} style={{transitionDelay: "0.4s"}}>
            <SpiritStack>
              <Button
              onClick={() => {
                handleClick('shadows-flicker-like-flames')
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #768a8c; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="shadow" src={ShadowProfile} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography><b>SHADOWS FLICKER LIKE FLAME</b></Typography>
            </SpiritStack>
          </Fade>
        </Stack>
          
        <Stack direction="row" spacing={space} sx={{mt: '25px'}}>

          {/* Vital Strength of the Earth */}
          <Fade in={true} style={{transitionDelay: "0.5s"}}>
            <SpiritStack>
              <Button
              onClick={() => {
                handleClick('vital-strength-of-the-earth')
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ba9d82; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="vital" src={VitalProfile} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography><b>VITAL STRENGTH OF THE EARTH</b></Typography>
            </SpiritStack>
          </Fade>

          {/* Thunderspeaker */}
          <Fade in={true} style={{transitionDelay: "0.6s"}}>
            <SpiritStack>
              <Button
              onClick={() => {
                handleClick('thunderspeaker')
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #588463; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="vital" src={ThunderspeakerProfile} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography><b>THUNDERSPEAKER</b></Typography>
            </SpiritStack>
          </Fade>
          
          {/* Rampant Spread of Green */}
          <Fade in={true} style={{transitionDelay: "0.7s"}}>
            <SpiritStack>
              <Button
              onClick={() => {
                handleClick('rampant-spread-of-green')
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #8acd96; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="vital" src={RampantProfile} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography><b>RAMPANT SPREAD OF GREEN</b></Typography>
            </SpiritStack>
          </Fade>
        </Stack>

        <Stack direction="row" spacing={space} sx={{mt: '25px', }}>

          {/* Bringer of Dreams and Nightmares */}
          <Fade in={true} style={{transitionDelay: "0.8s"}}>
            <SpiritStack>
              <Button
              onClick={() => {
                handleClick('bringer-of-dreams-and-nightmares')
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #575e74; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="vital" src={BringerProfile} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography sx={{width: '350px'}}><b>BRINGER OF DREAMS AND NIGHTMARES</b></Typography>
            </SpiritStack>
          </Fade>

          {/* Ocean's Hungry Grasp */}
          <Fade in={true} style={{transitionDelay: "0.9s"}}>
            <SpiritStack>
              <Button
              onClick={() => {
                handleClick('oceans-hungry-grasp');
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #84b2b7; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="vital" src={OceanProfile} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography><b>OCEAN'S HUNGRY GRASP</b></Typography>
            </SpiritStack>
          </Fade>

        </Stack>
      </BrowserView>






      {/* MOBILE VIEW */}
      <MobileView>
        <Stack direction="row" spacing={space}>

          {/* River Surges In Sunlight */}
          <Fade in={true} style={{transitionDelay: "0.2s"}}>
            <SpiritStack>
              <Button
              disableRipple
              onClick={() => {
                handleClick('river-surges-in-sunlight')
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #7fb5a8; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="river" src={RiverCard} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography><b>RIVER SURGES IN SUNLIGHT</b></Typography>
            </SpiritStack>
          </Fade>

          {/* Lightning's Swift Strike */}
          <Fade in={true} style={{transitionDelay: "0.3s"}}>
            <SpiritStack>
              <Button
              onClick={() => {
                handleClick('lightnings-swift-strike')
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffa163; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="lightning" src={LightningProfile} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography><b>LIGHTNING'S SWIFT STRIKE</b></Typography>
            </SpiritStack>
          </Fade>
        </Stack>
          
        <Stack direction="row" spacing={space} sx={{mt: '25px'}}>

          {/* Shadows Flicker Like Flame */}
          <Fade in={true} style={{transitionDelay: "0.4s"}}>
            <SpiritStack>
              <Button
              onClick={() => {
                handleClick('shadows-flicker-like-flames')
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #768a8c; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="shadow" src={ShadowProfile} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography><b>SHADOWS FLICKER LIKE FLAME</b></Typography>
            </SpiritStack>
          </Fade>

          {/* Vital Strength of the Earth */}
          <Fade in={true} style={{transitionDelay: "0.5s"}}>
            <SpiritStack>
              <Button
              onClick={() => {
                handleClick('vital-strength-of-the-earth')
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ba9d82; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="vital" src={VitalProfile} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography><b>VITAL STRENGTH OF THE EARTH</b></Typography>
            </SpiritStack>
          </Fade>

        </Stack>

        <Stack direction="row" spacing={space} sx={{mt: '25px'}}>

          {/* Thunderspeaker */}
          <Fade in={true} style={{transitionDelay: "0.6s"}}>
            <SpiritStack>
              <Button
              onClick={() => {
                handleClick('thunderspeaker')
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #588463; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="vital" src={ThunderspeakerProfile} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography><b>THUNDERSPEAKER</b></Typography>
            </SpiritStack>
          </Fade>

          {/* Rampant Spread of Green */}
          <Fade in={true} style={{transitionDelay: "0.7s"}}>
            <SpiritStack>
              <Button
              onClick={() => {
                handleClick('rampant-spread-of-green')
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #8acd96; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="vital" src={RampantProfile} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography><b>RAMPANT SPREAD OF GREEN</b></Typography>
            </SpiritStack>
          </Fade>

        </Stack>

        <Stack direction="row" spacing={space} sx={{mt: '25px'}}>

          {/* Bringer of Dreams and Nightmares */}
          <Fade in={true} style={{transitionDelay: "0.8s"}}>
            <SpiritStack>
              <Button
              onClick={() => {
                handleClick('bringer-of-dreams-and-nightmares')
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #575e74; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="vital" src={BringerProfile} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography sx={{height: '30px'}}><b>BRINGER OF DREAMS AND NIGHTMARES</b></Typography>
            </SpiritStack>
          </Fade>

          {/* Ocean's Hungry Grasp */}
          <Fade in={true} style={{transitionDelay: "0.9s"}}>
            <SpiritStack>
              <Button
              onClick={() => {
                handleClick('oceans-hungry-grasp');
              }}
              // onMouseEnter={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #84b2b7; transition: background-color 3s;'})}}
              // onMouseLeave={() => {window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'})}}
              >
                <img alt="vital" src={OceanProfile} style={{maxWidth: '150px', borderRadius: 4}} />
              </Button>
              <Typography><b>OCEAN'S HUNGRY GRASP</b></Typography>
            </SpiritStack>
          </Fade>

        </Stack>
      </MobileView>
    </Box>
  );
}