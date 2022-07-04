import { Box, Button } from "@mui/material";
import "../index.css";
import { useNavigate } from "react-router-dom";

export function Spirits() {

  const navigate = useNavigate();

  function handleClick(name) {
    navigate('/spirits/' + name);
  }

  return (
    <Box sx={{minWidth: "700px", display: "flex", alignItems: "center", flexDirection: 'column', margin: 'auto'}}>
      <Button variant="contained" sx={{backgroundColor: '#62542e', "&:hover": {backgroundColor: '#9f8b55'}}} 
      onClick={() => {
        handleClick('river-surges-in-sunlight')
      }}
      >
        RIVER SURGES IN SUNLIGHT
      </Button>
    </Box>
  );
}