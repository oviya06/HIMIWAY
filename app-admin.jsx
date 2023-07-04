import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PedalBikeSharpIcon from '@mui/icons-material/PedalBikeSharp';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
 

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };



  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link to="/" style={{textDecoration:"none",color:"maroon"}}>Logout</Link></MenuItem>
    </Menu>
  );


  return (
    <div>
        <Box>
        <AppBar position="static" style={{backgroundColor:"maroon"}}>
            <Toolbar >
            <PedalBikeSharpIcon sx={{ flexGrow: 0.02 }}/>
            <Typography variant='h6'>HIMIWAY</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box >  
                <IconButton
                aria-controls={menuId}
                onClick={handleProfileMenuOpen}
                color="inherit">
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