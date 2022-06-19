import {Box} from '@mui/material';
import {Stack} from '@mui/material';
import {Typography} from '@mui/material';
import SunElement from '../assets/img/sun.png';
import MoonElement from '../assets/img/moon.png';
import FireElement from '../assets/img/fire.png';
import AirElement from '../assets/img/air.png';
import WaterElement from '../assets/img/water.png';
import MountainElement from '../assets/img/mountain.png';
import LeafElement from '../assets/img/leaf.png';
import AnimalElement from '../assets/img/animal.png';
import UpArrow from '../assets/img/uparrow.svg';
import DownArrow from '../assets/img/downarrow.svg';
import UpClicked from '../assets/img/uparrowclicked.svg';
import DownClicked from '../assets/img/downarrowclicked.svg';
import { Button } from '@mui/material';
import { useState } from 'react';
import '../index.css';


export function ElementTracker() {

  // Number of each element
  const [numSun, setNumSun] = useState(0);
  const [numMoon, setNumMoon] = useState(0);
  const [numFire, setNumFire] = useState(0);
  const [numAir, setNumAir] = useState(0);
  const [numWater, setNumWater] = useState(0);
  const [numMountain, setNumMountain] = useState(0);
  const [numLeaf, setNumLeaf] = useState(0);
  const [numAnimal, setNumAnimal] = useState(0);

  // Button Flags
  const [upSunButtonClickFlag, setSunUpButtonClickFlag] = useState(false);
  const [downSunButtonClickFlag, setSunDownButtonClickFlag] = useState(false);
  const [upMoonButtonClickFlag, setMoonUpButtonClickFlag] = useState(false);
  const [downMoonButtonClickFlag, setMoonDownButtonClickFlag] = useState(false);
  const [upFireButtonClickFlag, setFireUpButtonClickFlag] = useState(false);
  const [downFireButtonClickFlag, setFireDownButtonClickFlag] = useState(false);
  const [upAirButtonClickFlag, setAirUpButtonClickFlag] = useState(false);
  const [downAirButtonClickFlag, setAirDownButtonClickFlag] = useState(false);
  const [upWaterButtonClickFlag, setWaterUpButtonClickFlag] = useState(false);
  const [downWaterButtonClickFlag, setWaterDownButtonClickFlag] = useState(false);
  const [upMountainButtonClickFlag, setMountainUpButtonClickFlag] = useState(false);
  const [downMountainButtonClickFlag, setMountainDownButtonClickFlag] = useState(false);
  const [upLeafButtonClickFlag, setLeafUpButtonClickFlag] = useState(false);
  const [downLeafButtonClickFlag, setLeafDownButtonClickFlag] = useState(false);
  const [upAnimalButtonClickFlag, setAnimalUpButtonClickFlag] = useState(false);
  const [downAnimalButtonClickFlag, setAnimalDownButtonClickFlag] = useState(false);

  return(
    <Box sx={{minWidth: "600px", display: "flex", alignItems: "center", flexDirection: 'column', margin: 'auto'}}>
      <Button variant="contained" onClick={() => {
        setNumSun(0);
        setNumMoon(0);
        setNumFire(0);
        setNumAir(0);
        setNumWater(0);
        setNumMountain(0);
        setNumLeaf(0);
        setNumAnimal(0);
        }}>
        Reset
      </Button>
    
      <Box sx={{mt: '50px',display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Stack spacing={3} sx={{mr: "150px"}}>
          <div id='sun'>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                onMouseDown={() => {setSunUpButtonClickFlag(!upSunButtonClickFlag);}}
                onMouseUp={() => {setSunUpButtonClickFlag(!upSunButtonClickFlag);}}
                onMouseLeave={() => setSunUpButtonClickFlag(false)}
                onClick={() => {setNumSun(numSun + 1)}}
                disabled={numSun + 1 > 99 ? true : false}
                >
                  <img draggable="false" alt="uparrow" src={upSunButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                onMouseDown={() => {setSunDownButtonClickFlag(!downSunButtonClickFlag);}}
                onMouseUp={() => {setSunDownButtonClickFlag(!downSunButtonClickFlag);}}
                onMouseLeave={() => setSunDownButtonClickFlag(false)}
                onClick={() => {setNumSun(numSun - 1)}}
                disabled={numSun - 1 < 0 ? true : false}
                >
                  <img draggable="false" alt="downarrow" src={downSunButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px', fontFamily: 'cursive'}}>{numSun}</Typography>
              <img className="no-select" draggable="false" src={SunElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>

          <div id='moon'>
            < Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                  onMouseDown={() => {setMoonUpButtonClickFlag(!upMoonButtonClickFlag);}}
                  onMouseUp={() => {setMoonUpButtonClickFlag(!upMoonButtonClickFlag);}}
                  onMouseLeave={() => setMoonUpButtonClickFlag(false)}
                  onClick={() => {setNumMoon(numMoon + 1)}}
                  disabled={numMoon + 1 > 99 ? true : false}
                >
                <img draggable="false" alt="uparrow" src={upMoonButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                  onMouseDown={() => {setMoonDownButtonClickFlag(!downMoonButtonClickFlag);}}
                  onMouseUp={() => {setMoonDownButtonClickFlag(!downMoonButtonClickFlag);}}
                  onMouseLeave={() => setMoonDownButtonClickFlag(false)}
                  onClick={() => {setNumMoon(numMoon - 1)}}
                  disabled={numMoon - 1 < 0 ? true : false}
                >
                <img draggable="false" alt="downarrow" src={downMoonButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px', fontFamily: 'cursive'}}>{numMoon}</Typography>
              <img className="no-select" draggable="false" src={MoonElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>

          <div id='fire'>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                  onMouseDown={() => {setFireUpButtonClickFlag(!upFireButtonClickFlag);}}
                  onMouseUp={() => {setFireUpButtonClickFlag(!upFireButtonClickFlag);}}
                  onMouseLeave={() => setFireUpButtonClickFlag(false)}
                  onClick={() => {setNumFire(numFire + 1)}}
                  disabled={numFire + 1 > 99 ? true : false}
                >
                <img draggable="false" alt="uparrow" src={upFireButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                  onMouseDown={() => {setFireDownButtonClickFlag(!downFireButtonClickFlag);}}
                  onMouseUp={() => {setFireDownButtonClickFlag(!downFireButtonClickFlag);}}
                  onMouseLeave={() => setFireDownButtonClickFlag(false)}
                  onClick={() => {setNumFire(numFire - 1)}}
                  disabled={numFire - 1 < 0 ? true : false}
                >
                <img draggable="false" alt="downarrow" src={downFireButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px', fontFamily: 'cursive'}}>{numFire}</Typography>
              <img className="no-select" draggable="false" src={FireElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>

          <div id='air'>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                  onMouseDown={() => {setAirUpButtonClickFlag(!upAirButtonClickFlag);}}
                  onMouseUp={() => {setAirUpButtonClickFlag(!upAirButtonClickFlag);}}
                  onMouseLeave={() => setAirUpButtonClickFlag(false)}
                  onClick={() => {setNumAir(numAir + 1)}}
                  disabled={numAir + 1 > 99 ? true : false}
                >
                <img draggable="false" alt="uparrow" src={upAirButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                  onMouseDown={() => {setAirDownButtonClickFlag(!downAirButtonClickFlag);}}
                  onMouseUp={() => {setAirDownButtonClickFlag(!downAirButtonClickFlag);}}
                  onMouseLeave={() => setAirDownButtonClickFlag(false)}
                  onClick={() => {setNumAir(numAir - 1)}}
                  disabled={numAir - 1 < 0 ? true : false}
                >
                <img draggable="false" alt="downarrow" src={downAirButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px', fontFamily: 'cursive'}}>{numAir}</Typography>
              <img className="no-select" draggable="false" src={AirElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>
        </Stack>

        <Stack spacing={3}>
          <div id='water'>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                  onMouseDown={() => {setWaterUpButtonClickFlag(!upWaterButtonClickFlag);}}
                  onMouseUp={() => {setWaterUpButtonClickFlag(!upWaterButtonClickFlag);}}
                  onMouseLeave={() => setWaterUpButtonClickFlag(false)}
                  onClick={() => {setNumWater(numWater + 1)}}
                  disabled={numWater + 1 > 99 ? true : false}
                >
                <img draggable="false" alt="uparrow" src={upWaterButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                  onMouseDown={() => {setWaterDownButtonClickFlag(!downWaterButtonClickFlag);}}
                  onMouseUp={() => {setWaterDownButtonClickFlag(!downWaterButtonClickFlag);}}
                  onMouseLeave={() => setWaterDownButtonClickFlag(false)}
                  onClick={() => {setNumWater(numWater - 1)}}
                  disabled={numWater - 1 < 0 ? true : false}
                >
                <img draggable="false" alt="downarrow" src={downWaterButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px', fontFamily: 'cursive'}}>{numWater}</Typography>
              <img className="no-select" draggable="false" src={WaterElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>

          <div id='mountain'>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                  onMouseDown={() => {setMountainUpButtonClickFlag(!upMountainButtonClickFlag);}}
                  onMouseUp={() => {setMountainUpButtonClickFlag(!upMountainButtonClickFlag);}}
                  onMouseLeave={() => setMountainUpButtonClickFlag(false)}
                  onClick={() => {setNumMountain(numMountain + 1)}}
                  disabled={numMountain + 1 > 99 ? true : false}
                >
                <img draggable="false" alt="uparrow" src={upMountainButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                  onMouseDown={() => {setMountainDownButtonClickFlag(!downMountainButtonClickFlag);}}
                  onMouseUp={() => {setMountainDownButtonClickFlag(!downMountainButtonClickFlag);}}
                  onMouseLeave={() => setMountainDownButtonClickFlag(false)}
                  onClick={() => {setNumMountain(numMountain - 1)}}
                  disabled={numMountain - 1 < 0 ? true : false}
                >
                <img draggable="false" alt="downarrow" src={downMountainButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px', fontFamily: 'cursive'}}>{numMountain}</Typography>
              <img className="no-select" draggable="false" src={MountainElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>

          <div id='leaf'>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                  onMouseDown={() => {setLeafUpButtonClickFlag(!upLeafButtonClickFlag);}}
                  onMouseUp={() => {setLeafUpButtonClickFlag(!upLeafButtonClickFlag);}}
                  onMouseLeave={() => setLeafUpButtonClickFlag(false)}
                  onClick={() => {setNumLeaf(numLeaf + 1)}}
                  disabled={numLeaf + 1 > 99 ? true : false}
                >
                <img draggable="false" alt="uparrow" src={upLeafButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                  onMouseDown={() => {setLeafDownButtonClickFlag(!downLeafButtonClickFlag);}}
                  onMouseUp={() => {setLeafDownButtonClickFlag(!downLeafButtonClickFlag);}}
                  onMouseLeave={() => setLeafDownButtonClickFlag(false)}
                  onClick={() => {setNumLeaf(numLeaf - 1)}}
                  disabled={numLeaf - 1 < 0 ? true : false}
                >
                <img draggable="false" alt="downarrow" src={downLeafButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px', fontFamily: 'cursive'}}>{numLeaf}</Typography>
              <img className="no-select" draggable="false" src={LeafElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>

          <div id='animal'>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                  onMouseDown={() => {setAnimalUpButtonClickFlag(!upAnimalButtonClickFlag);}}
                  onMouseUp={() => {setAnimalUpButtonClickFlag(!upAnimalButtonClickFlag);}}
                  onMouseLeave={() => setAnimalUpButtonClickFlag(false)}
                  onClick={() => {setNumAnimal(numAnimal + 1)}}
                  disabled={numAnimal + 1 > 99 ? true : false}
                >
                <img draggable="false" alt="uparrow" src={upAnimalButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                  onMouseDown={() => {setAnimalDownButtonClickFlag(!downAnimalButtonClickFlag);}}
                  onMouseUp={() => {setAnimalDownButtonClickFlag(!downAnimalButtonClickFlag);}}
                  onMouseLeave={() => setAnimalDownButtonClickFlag(false)}
                  onClick={() => {setNumAnimal(numAnimal - 1)}}
                  disabled={numAnimal - 1 < 0 ? true : false}
                >
                <img draggable="false" alt="downarrow" src={downAnimalButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px', fontFamily: 'cursive'}}>{numAnimal}</Typography>
              <img className="no-select" draggable="false" src={AnimalElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>
        </Stack>
      </Box>
    </Box>
  );
}