import * as React from 'react';
import {Box,IconButton,Menu,MenuItem} from '@mui/material';
import {Typography,Toolbar,AppBar} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PedalBikeSharpIcon from '@mui/icons-material/PedalBikeSharp';
import {Link} from "react-router-dom";


function Appps(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        id={menuId}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}><Link to="/changepassword" style={{textDecoration:"none",color:"maroon"}}>Change Password</Link></MenuItem>
        <MenuItem onClick={handleMenuClose}><Link to="/" style={{textDecoration:"none",color:"maroon"}}>Logout</Link></MenuItem>
      </Menu>
    );
    return(
        <div>
                <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:"maroon"}} position="static">
        <Toolbar>
          <PedalBikeSharpIcon sx={{ flexGrow: 0.03 }}/>
            <Typography  variant='h6'>HIMIWAY</Typography>
              <Box sx={{ flexGrow: 1 }} />
                <button style={{background:"transparent",color:"white",border:"none", marginLeft:"25px", cursor:"pointer"}}><Typography><Link to="/home" style={{color:'white',textDecoration:"none"}}>Home</Link></Typography></button>
                <button style={{background:"transparent",color:"white",border:"none", marginLeft:"25px", cursor:"pointer"}}><Typography><Link to="/home" style={{color:'white',textDecoration:"none"}}>About Us</Link></Typography></button>
                <button style={{background:"transparent",color:"white",border:"none", marginLeft:"25px", cursor:"pointer"}}><Typography><Link to="/explore" style={{color:'white',textDecoration:"none"}}>Shop</Link></Typography></button>
                <button style={{background:"transparent",color:"white",border:"none", marginLeft:"25px", cursor:"pointer"}}><Typography><Link to="/home" style={{color:'white',textDecoration:"none"}}>Contact</Link></Typography></button>
              <Box>
              <IconButton aria-controls={menuId} onClick={handleProfileMenuOpen} color="inherit">
                <AccountCircle />
              </IconButton>
            </Box> 
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
        </div>
    );
}

export default Appps;