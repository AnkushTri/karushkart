

import {AppBar,Toolbar,Box,styled} from '@mui/material'
import mylogo from '../../data/logo.png'
import CustomButton from './CustomButton'
import Search from './Search'

const StyledHeader=styled(AppBar)`
    background:#FF69B4;
    height:3.5rem;
`
const Components=styled(Box)`
    margin-left:10%;
    padding-bottom:5px;
`

const Header=()=>{

    return(
        < StyledHeader>
            <Toolbar>
                <Components>
                    <img src={mylogo} alt="logo" style={{width:80,height:45}}/>
                </Components>
                <Search/>
                <Box>
                    <CustomButton/>
                </Box>
            </Toolbar>
        </ StyledHeader>
    );
}

export default Header;