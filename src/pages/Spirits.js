import { Box, Button, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";
import RiverProfile from '../assets/spirits/river/profile.png';
import LightningProfile from '../assets/spirits/lightning/profile.png';
import "../index.css";
import { useNavigate } from "react-router-dom";

export function Spirits() {

  const navigate = useNavigate();

  function handleClick(name) {
    navigate('/spirits/' + name);
  }

  const SpiritStack = styled(Stack)({  
    width: '250px', 
    height: '200px', 
    justifyContent: 'center', 
    alignItems: 'center',
  })

  return (
    <Box sx={{minWidth: "700px", display: "flex", alignItems: "center", flexDirection: 'column', margin: 'auto'}}>
      <Stack direction="row" spacing={15}>
        {/* River Surges In Sunlight */}
        <SpiritStack sx={{border: 1, borderWidth: 3, borderRadius: 4, backgroundColor: '#40b296'}}>
          <Button sx={{}}
          onClick={() => {
            handleClick('river-surges-in-sunlight')
          }}
          >
            <img alt="river" src={RiverProfile} style={{maxWidth: '150px', borderRadius: 16}} />
          </Button>
          <Typography><b>RIVER SURGES IN SUNLIGHT</b></Typography>
        </SpiritStack>

        {/* River Surges In Sunlight */}
        <SpiritStack sx={{border: 1, borderWidth: 3, borderRadius: 4, backgroundColor: '#fd822f'}}>
          <Button sx={{}}
          onClick={() => {
            handleClick('lightnings-swift-strike')
          }}
          >
            <img alt="river" src={LightningProfile} style={{maxWidth: '150px', borderRadius: 16}} />
          </Button>
          <Typography><b>LIGHTNING'S SWIFT STRIKE</b></Typography>
        </SpiritStack>
      </Stack>
    </Box>
  );
}