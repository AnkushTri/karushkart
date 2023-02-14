
import { Box ,Button,Typography,styled} from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';

const Buttons=styled(Box)`
    margin:0rem 3rem;
    color:black;
    border-radius:2px;
    display:flex;
  
  `
  const Section=styled(Typography)`
    margin:0 2rem;
  `
  const LoginButton=styled(Button)`
    padding-left:2rem;
    padding-right:2rem;
    background:#fff;
    color:pink;
  `
  

const CustomButton=()=>{

    return(
        <Buttons>
            <LoginButton >Login</LoginButton> 
            <Section>Become a Seller</Section>
            <Section>more</Section>

            <Box style={{display:'flex',margin:'0 1rem'}}>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </Box>
        </Buttons>
    );
}

export default CustomButton;