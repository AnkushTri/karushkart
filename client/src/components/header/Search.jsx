
import {InputBase,styled,Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar=styled(Box)`
    background: #fff;
    border: 2px solid black;
    width:30%;
    border-radius:2px;
    margin-left:10px;
    display:flex;
`
const InputSearchBase =styled(InputBase)`

    padding-left:10%;
    width:100;

`
const SearchIconWrapper=styled(Box)`
    color:black;
    padding-left:35%;
    padding-top:5px;
`

const Search= ()=>{

    return(
        <SearchBar>
            <InputSearchBase placeholder='search for products'/>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchBar>
    );
}

export default Search;