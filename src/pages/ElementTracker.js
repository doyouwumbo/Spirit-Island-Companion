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
import FearLogo from '../assets/img/Fear.png'
import UpArrow from '../assets/img/uparrow.svg';
import DownArrow from '../assets/img/downarrow.svg';
import UpClicked from '../assets/img/uparrowclicked.svg';
import DownClicked from '../assets/img/downarrowclicked.svg';
import resetNormal from '../assets/img/resetnormal.svg';
import resetDown from '../assets/img/reset.svg';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import {isMobile} from 'react-device-detect'
import '../index.css';


export function ElementTracker() {

  // Number of each element
  const [numSun, setNumSun] = useState(getElement("numSun"));
  const [numMoon, setNumMoon] = useState(getElement("numMoon"));
  const [numFire, setNumFire] = useState(getElement("numFire"));
  const [numAir, setNumAir] = useState(getElement("numAir"));
  const [numWater, setNumWater] = useState(getElement("numWater"));
  const [numMountain, setNumMountain] = useState(getElement("numMountain"));
  const [numLeaf, setNumLeaf] = useState(getElement("numLeaf"));
  const [numAnimal, setNumAnimal] = useState(getElement("numAnimal"));
  const [numFear, setNumFear] = useState(getElement("numFear"));

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
  const [upFearButtonClickFlag, setFearUpButtonClickFlag] = useState(false);
  const [downFearButtonClickFlag, setFearDownButtonClickFlag] = useState(false);
  const [resetButtonFlag, setResetButtonFlag] = useState(false);

  // Sets elements
  function resetElements() {
    setNumSun(0);
    setNumMoon(0);
    setNumFire(0);
    setNumAir(0);
    setNumWater(0);
    setNumMountain(0);
    setNumLeaf(0);
    setNumAnimal(0);
  }
  
  function getElement(name) {
    const data = JSON.parse(window.localStorage.getItem('ELEMENT_STATES'))
    if (data !== null && data[name] !== null) return data[name];
    return 0; 
  }

  // If any element value changes, save its state to the browser local storage
  useEffect(() => {
    window.localStorage.setItem('ELEMENT_STATES', JSON.stringify({
      "numSun": numSun,
      "numMoon": numMoon,
      "numFire":  numFire,
      "numAir": numAir,
      "numWater": numWater,
      "numMountain": numMountain,
      "numLeaf": numLeaf,
      "numAnimal": numAnimal,
      "numFear": numFear
    }));
  }, [numSun, numMoon, numFire, numAir, numWater, numMountain, numLeaf, numAnimal, numFear]);

  window.requestAnimationFrame(()=> { document.body.style = 'background-color: #ffdf85; transition: background-color 3s;'});

  return(
    <Box sx={{minWidth: "700px", display: "flex", alignItems: "center", flexDirection: 'column', margin: 'auto'}}>
      <Typography sx={{color: '#9a7c2b'}}>(Click on an icon to reset its value. The "RESET" button will not reset fear.)</Typography>

      {/* Reset and Fear button */}
      <Box sx={{display: 'flex', alignItems: 'center', mb: '20px', mt: '20px'}}>

        {/* Reset button */}
        <Button sx={{width: '220px', height: '60px', mr: '85px'}} onClick={resetElements}
        onMouseDown={() => {setResetButtonFlag(!resetButtonFlag)}}
        onMouseUp={() => {setResetButtonFlag(!resetButtonFlag)}}
        onMouseLeave={() => {setResetButtonFlag(false)}}
        onTouchStart={() => {setResetButtonFlag(!resetButtonFlag)}}
        onTouchEnd={() => {setResetButtonFlag(!resetButtonFlag)}}
        onTouchCancel={() => {setResetButtonFlag(false)}}
        disableRipple={true}
        >
          <img style={{width: '220px'}} draggable="false" alt="resetbutton" src={resetButtonFlag ? resetDown : resetNormal} />
        </Button>

        {/* Fear Button */}
        <Stack sx={{mr: '10px'}}>
          <Button sx={{maxWidth: '20px'}} disableRipple={true} 
          onMouseDown={() => {setFearUpButtonClickFlag(!upFearButtonClickFlag);}}
          onMouseUp={() => {setFearUpButtonClickFlag(!upFearButtonClickFlag);}}
          onMouseLeave={() => setFearUpButtonClickFlag(false)}
          onTouchStart={() => {setFearUpButtonClickFlag(!upFearButtonClickFlag);}}
          onTouchEnd={() => {setFearUpButtonClickFlag(!upFearButtonClickFlag);}}
          onTouchCancel={() => setFearUpButtonClickFlag(false)}
          onClick={() => {setNumFear(numFear + 1)}}
          disabled={numFear + 1 > 99 ? true : false}
          >
            <img draggable="false" alt="uparrow" src={upFearButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
          </Button>

          <Button sx={{maxWidth: '20px'}} disableRipple={true}
          onMouseDown={() => {setFearDownButtonClickFlag(!downFearButtonClickFlag);}}
          onMouseUp={() => {setFearDownButtonClickFlag(!downFearButtonClickFlag);}}
          onMouseLeave={() => setFearDownButtonClickFlag(false)}
          onTouchStart={() => {setFearDownButtonClickFlag(!downFearButtonClickFlag);}}
          onTouchEnd={() => {setFearDownButtonClickFlag(!downFearButtonClickFlag);}}
          onTouchCancel={() => setFearDownButtonClickFlag(false)}
          onClick={() => {setNumFear(numFear - 1)}}
          disabled={numFear - 1 < 0 ? true : false}
          >
            <img draggable="false" alt="downarrow" src={downFearButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
          </Button>
        </Stack>
        <Typography className="no-select" sx={{width: '60px', fontSize: '48px'}}>{numFear}</Typography>
        <img alt="fear" className="no-select" draggable="false" src={FearLogo} style={{maxWidth: 75}} onClick={() => {setNumFear(0)}}></img>
      </Box>

      {/* Elements Stacks */}
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Stack spacing={isMobile ? 3 : 5} sx={{mr: "100px"}}>
          <div id='sun'>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                onMouseDown={() => {setSunUpButtonClickFlag(!upSunButtonClickFlag);}}
                onMouseUp={() => {setSunUpButtonClickFlag(!upSunButtonClickFlag);}}
                onMouseLeave={() => setSunUpButtonClickFlag(false)}
                onTouchStart={() => {setSunUpButtonClickFlag(!upSunButtonClickFlag);}}
                onTouchEnd={() => {setSunUpButtonClickFlag(!upSunButtonClickFlag);}}
                onTouchCancel={() => setSunUpButtonClickFlag(false)}
                onClick={() => {setNumSun(numSun + 1)}}
                disabled={numSun + 1 > 99 ? true : false}
                >
                  <img draggable="false" alt="uparrow" src={upSunButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                onMouseDown={() => {setSunDownButtonClickFlag(!downSunButtonClickFlag);}}
                onMouseUp={() => {setSunDownButtonClickFlag(!downSunButtonClickFlag);}}
                onMouseLeave={() => setSunDownButtonClickFlag(false)}
                onTouchStart={() => {setSunDownButtonClickFlag(!downSunButtonClickFlag);}}
                onTouchEnd={() => {setSunDownButtonClickFlag(!downSunButtonClickFlag);}}
                onTouchCancel={() => setSunDownButtonClickFlag(false)}
                onClick={() => {setNumSun(numSun - 1)}}
                disabled={numSun - 1 < 0 ? true : false}
                >
                  <img draggable="false" alt="downarrow" src={downSunButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px'}}>{numSun}</Typography>
              <img alt="sun" className="no-select" onClick={() => {setNumSun(0)}} draggable="false" src={SunElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>

          <div id='moon'>
            < Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                  onMouseDown={() => {setMoonUpButtonClickFlag(!upMoonButtonClickFlag);}}
                  onMouseUp={() => {setMoonUpButtonClickFlag(!upMoonButtonClickFlag);}}
                  onMouseLeave={() => setMoonUpButtonClickFlag(false)}
                  onTouchStart={() => {setMoonUpButtonClickFlag(!upMoonButtonClickFlag);}}
                  onTouchEnd={() => {setMoonUpButtonClickFlag(!upMoonButtonClickFlag);}}
                  onTouchCancel={() => setMoonUpButtonClickFlag(false)}
                  onClick={() => {setNumMoon(numMoon + 1)}}
                  disabled={numMoon + 1 > 99 ? true : false}
                >
                <img draggable="false" alt="uparrow" src={upMoonButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                  onMouseDown={() => {setMoonDownButtonClickFlag(!downMoonButtonClickFlag);}}
                  onMouseUp={() => {setMoonDownButtonClickFlag(!downMoonButtonClickFlag);}}
                  onMouseLeave={() => setMoonDownButtonClickFlag(false)}
                  onTouchStart={() => {setMoonDownButtonClickFlag(!downMoonButtonClickFlag);}}
                  onTouchEnd={() => {setMoonDownButtonClickFlag(!downMoonButtonClickFlag);}}
                  onTouchCancel={() => setMoonDownButtonClickFlag(false)}
                  onClick={() => {setNumMoon(numMoon - 1)}}
                  disabled={numMoon - 1 < 0 ? true : false}
                >
                <img draggable="false" alt="downarrow" src={downMoonButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px'}}>{numMoon}</Typography>
              <img alt="moon" onClick={() => {setNumMoon(0)}} className="no-select" draggable="false" src={MoonElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>

          <div id='fire'>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                  onMouseDown={() => {setFireUpButtonClickFlag(!upFireButtonClickFlag);}}
                  onMouseUp={() => {setFireUpButtonClickFlag(!upFireButtonClickFlag);}}
                  onMouseLeave={() => setFireUpButtonClickFlag(false)}
                  onTouchStart={() => {setFireUpButtonClickFlag(!upFireButtonClickFlag);}}
                  onTouchEnd={() => {setFireUpButtonClickFlag(!upFireButtonClickFlag);}}
                  onTouchCancel={() => setFireUpButtonClickFlag(false)}
                  onClick={() => {setNumFire(numFire + 1)}}
                  disabled={numFire + 1 > 99 ? true : false}
                >
                <img draggable="false" alt="uparrow" src={upFireButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                  onMouseDown={() => {setFireDownButtonClickFlag(!downFireButtonClickFlag);}}
                  onMouseUp={() => {setFireDownButtonClickFlag(!downFireButtonClickFlag);}}
                  onMouseLeave={() => setFireDownButtonClickFlag(false)}
                  onTouchStart={() => {setFireDownButtonClickFlag(!downFireButtonClickFlag);}}
                  onTouchEnd={() => {setFireDownButtonClickFlag(!downFireButtonClickFlag);}}
                  onTouchCancel={() => setFireDownButtonClickFlag(false)}
                  onClick={() => {setNumFire(numFire - 1)}}
                  disabled={numFire - 1 < 0 ? true : false}
                >
                <img draggable="false" alt="downarrow" src={downFireButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px'}}>{numFire}</Typography>
              <img alt="fire" onClick={() => {setNumFire(0)}} className="no-select" draggable="false" src={FireElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>

          <div id='air'>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                  onMouseDown={() => {setAirUpButtonClickFlag(!upAirButtonClickFlag);}}
                  onMouseUp={() => {setAirUpButtonClickFlag(!upAirButtonClickFlag);}}
                  onMouseLeave={() => setAirUpButtonClickFlag(false)}
                  onTouchStart={() => {setAirUpButtonClickFlag(!upAirButtonClickFlag);}}
                  onTouchEnd={() => {setAirUpButtonClickFlag(!upAirButtonClickFlag);}}
                  onTouchCancel={() => setAirUpButtonClickFlag(false)}
                  onClick={() => {setNumAir(numAir + 1)}}
                  disabled={numAir + 1 > 99 ? true : false}
                >
                <img draggable="false" alt="uparrow" src={upAirButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                  onMouseDown={() => {setAirDownButtonClickFlag(!downAirButtonClickFlag);}}
                  onMouseUp={() => {setAirDownButtonClickFlag(!downAirButtonClickFlag);}}
                  onMouseLeave={() => setAirDownButtonClickFlag(false)}
                  onTouchStart={() => {setAirDownButtonClickFlag(!downAirButtonClickFlag);}}
                  onTouchEnd={() => {setAirDownButtonClickFlag(!downAirButtonClickFlag);}}
                  onTouchCancel={() => setAirDownButtonClickFlag(false)}
                  onClick={() => {setNumAir(numAir - 1)}}
                  disabled={numAir - 1 < 0 ? true : false}
                >
                <img draggable="false" alt="downarrow" src={downAirButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px'}}>{numAir}</Typography>
              <img alt="air" onClick={() => {setNumAir(0)}} className="no-select" draggable="false" src={AirElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>
        </Stack>

        {/* Right stack */}
        <Stack spacing={isMobile ? 3 : 5}>
          <div id='water'>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                  onMouseDown={() => {setWaterUpButtonClickFlag(!upWaterButtonClickFlag);}}
                  onMouseUp={() => {setWaterUpButtonClickFlag(!upWaterButtonClickFlag);}}
                  onMouseLeave={() => setWaterUpButtonClickFlag(false)}
                  onTouchStart={() => {setWaterUpButtonClickFlag(!upWaterButtonClickFlag);}}
                  onTouchEnd={() => {setWaterUpButtonClickFlag(!upWaterButtonClickFlag);}}
                  onTouchCancel={() => setWaterUpButtonClickFlag(false)}
                  onClick={() => {setNumWater(numWater + 1)}}
                  disabled={numWater + 1 > 99 ? true : false}
                >
                <img draggable="false" alt="uparrow" src={upWaterButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                  onMouseDown={() => {setWaterDownButtonClickFlag(!downWaterButtonClickFlag);}}
                  onMouseUp={() => {setWaterDownButtonClickFlag(!downWaterButtonClickFlag);}}
                  onMouseLeave={() => setWaterDownButtonClickFlag(false)}
                  onTouchStart={() => {setWaterDownButtonClickFlag(!downWaterButtonClickFlag);}}
                  onTouchEnd={() => {setWaterDownButtonClickFlag(!downWaterButtonClickFlag);}}
                  onTouchCancel={() => setWaterDownButtonClickFlag(false)}
                  onClick={() => {setNumWater(numWater - 1)}}
                  disabled={numWater - 1 < 0 ? true : false}
                >
                <img draggable="false" alt="downarrow" src={downWaterButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px'}}>{numWater}</Typography>
              <img alt="water" onClick={() => {setNumWater(0)}} className="no-select" draggable="false" src={WaterElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>

          <div id='mountain'>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                  onMouseDown={() => {setMountainUpButtonClickFlag(!upMountainButtonClickFlag);}}
                  onMouseUp={() => {setMountainUpButtonClickFlag(!upMountainButtonClickFlag);}}
                  onMouseLeave={() => setMountainUpButtonClickFlag(false)}
                  onTouchStart={() => {setMountainUpButtonClickFlag(!upMountainButtonClickFlag);}}
                  onTouchEnd={() => {setMountainUpButtonClickFlag(!upMountainButtonClickFlag);}}
                  onTouchCancel={() => setMountainUpButtonClickFlag(false)}
                  onClick={() => {setNumMountain(numMountain + 1)}}
                  disabled={numMountain + 1 > 99 ? true : false}
                >
                <img draggable="false" alt="uparrow" src={upMountainButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                  onMouseDown={() => {setMountainDownButtonClickFlag(!downMountainButtonClickFlag);}}
                  onMouseUp={() => {setMountainDownButtonClickFlag(!downMountainButtonClickFlag);}}
                  onMouseLeave={() => setMountainDownButtonClickFlag(false)}
                  onTouchStart={() => {setMountainDownButtonClickFlag(!downMountainButtonClickFlag);}}
                  onTouchEnd={() => {setMountainDownButtonClickFlag(!downMountainButtonClickFlag);}}
                  onTouchCancel={() => setMountainDownButtonClickFlag(false)}
                  onClick={() => {setNumMountain(numMountain - 1)}}
                  disabled={numMountain - 1 < 0 ? true : false}
                >
                <img draggable="false" alt="downarrow" src={downMountainButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px'}}>{numMountain}</Typography>
              <img alt="mountain" onClick={() => {setNumMountain(0)}} className="no-select" draggable="false" src={MountainElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>

          <div id='leaf'>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                  onMouseDown={() => {setLeafUpButtonClickFlag(!upLeafButtonClickFlag);}}
                  onMouseUp={() => {setLeafUpButtonClickFlag(!upLeafButtonClickFlag);}}
                  onMouseLeave={() => setLeafUpButtonClickFlag(false)}
                  onTouchStart={() => {setLeafUpButtonClickFlag(!upLeafButtonClickFlag);}}
                  onTouchEnd={() => {setLeafUpButtonClickFlag(!upLeafButtonClickFlag);}}
                  onTouchCancel={() => setLeafUpButtonClickFlag(false)}
                  onClick={() => {setNumLeaf(numLeaf + 1)}}
                  disabled={numLeaf + 1 > 99 ? true : false}
                >
                <img draggable="false" alt="uparrow" src={upLeafButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                  onMouseDown={() => {setLeafDownButtonClickFlag(!downLeafButtonClickFlag);}}
                  onMouseUp={() => {setLeafDownButtonClickFlag(!downLeafButtonClickFlag);}}
                  onMouseLeave={() => setLeafDownButtonClickFlag(false)}
                  onTouchStart={() => {setLeafDownButtonClickFlag(!downLeafButtonClickFlag);}}
                  onTouchEnd={() => {setLeafDownButtonClickFlag(!downLeafButtonClickFlag);}}
                  onTouchCancel={() => setLeafDownButtonClickFlag(false)}
                  onClick={() => {setNumLeaf(numLeaf - 1)}}
                  disabled={numLeaf - 1 < 0 ? true : false}
                >
                <img draggable="false" alt="downarrow" src={downLeafButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px'}}>{numLeaf}</Typography>
              <img alt="leaf" onClick={() => {setNumLeaf(0)}} className="no-select" draggable="false" src={LeafElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>

          <div id='animal'>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Stack sx={{mr: '10px'}}>
                <Button sx={{maxWidth: '20px'}} disableRipple={true} 
                  onMouseDown={() => {setAnimalUpButtonClickFlag(!upAnimalButtonClickFlag);}}
                  onMouseUp={() => {setAnimalUpButtonClickFlag(!upAnimalButtonClickFlag);}}
                  onMouseLeave={() => setAnimalUpButtonClickFlag(false)}
                  onTouchStart={() => {setAnimalUpButtonClickFlag(!upAnimalButtonClickFlag);}}
                  onTouchEnd={() => {setAnimalUpButtonClickFlag(!upAnimalButtonClickFlag);}}
                  onTouchCancel={() => setAnimalUpButtonClickFlag(false)}
                  onClick={() => {setNumAnimal(numAnimal + 1)}}
                  disabled={numAnimal + 1 > 99 ? true : false}
                >
                <img draggable="false" alt="uparrow" src={upAnimalButtonClickFlag ? UpClicked : UpArrow} style={{maxWidth: "60px"}} />
                </Button>

                <Button sx={{maxWidth: '20px'}} disableRipple={true}
                  onMouseDown={() => {setAnimalDownButtonClickFlag(!downAnimalButtonClickFlag);}}
                  onMouseUp={() => {setAnimalDownButtonClickFlag(!downAnimalButtonClickFlag);}}
                  onMouseLeave={() => setAnimalDownButtonClickFlag(false)}
                  onTouchStart={() => {setAnimalDownButtonClickFlag(!downAnimalButtonClickFlag);}}
                  onTouchEnd={() => {setAnimalDownButtonClickFlag(!downAnimalButtonClickFlag);}}
                  onTouchCancel={() => setAnimalDownButtonClickFlag(false)}
                  onClick={() => {setNumAnimal(numAnimal - 1)}}
                  disabled={numAnimal - 1 < 0 ? true : false}
                >
                <img draggable="false" alt="downarrow" src={downAnimalButtonClickFlag ? DownClicked : DownArrow} style={{maxWidth: "60px"}}  />
                </Button>
              </Stack>
              <Typography className="no-select" sx={{width: '60px', fontSize: '48px'}}>{numAnimal}</Typography>
              <img alt="animal" onClick={() => {setNumAnimal(0)}} className="no-select" draggable="false" src={AnimalElement} style={{maxWidth: 75}}></img>
            </Box>
          </div>
        </Stack>
      </Box>
    </Box>
  );
}