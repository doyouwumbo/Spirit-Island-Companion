import { Button, Typography, Stack, Fade } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

export function SpiritListCard(props) {

  const navigate = useNavigate();

  const SpiritStack = styled(Stack)({  
    width: '300px', 
    alignItems: 'center',
  })

  function handleClick(name) {
    navigate('/spirits/' + name);
  }

  function handleName() {
    return props.spiritName.toUpperCase().replaceAll('-', ' ');
  }

  return(
    <Fade in={props.fade} style={{transitionDelay: props.fadeTime}}>
      <SpiritStack>
        <Button
        disableRipple
        onClick={() => {
          handleClick(props.spiritName);
          
        }}
        >
          <img alt={props.spiritName} src={props.buttonImage} style={{maxWidth: '150px', borderRadius: 4, verticalAlign: ''}} />
        </Button>
        <Typography sx={{width: '350px'}}><b>{handleName()}</b></Typography>
      </SpiritStack>
    </Fade>
  );
}