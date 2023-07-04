import Paper from '@mui/material/Paper';
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DirectionsBikeSharpIcon from '@mui/icons-material/DirectionsBikeSharp';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router-dom';
function SideAdmin (){
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
    return(
      <div>

        <Paper elevation={10} style={{backgroundColor:"rgb(155, 31, 31)",height:'685px',width:'220px',borderRadius:"1px"}} id='sideadmin_paper_9'>
            <List style={{backgroundColor:"rgb(152, 50, 50)"}}
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
          <ListSubheader style={{backgroundColor:"rgb(175, 52, 52)"}} component="div" id="nested-list-subheader">
           Admin Panel ☻
          </ListSubheader> 
        }>
          <ListItemButton>
            <ListItemIcon>
              <PeopleAltIcon/>
            </ListItemIcon>
           <Link to="/signupdetails" style={{textDecoration:"none",color:"black"}}> <ListItemText primary="Register User" /></Link>
          </ListItemButton>
          
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <DirectionsBikeSharpIcon />
            </ListItemIcon>
            
            <ListItemText primary="E-cycle" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon></ListItemIcon>
                <Link  to="/postcycle" style={{textDecoration:"none",color:"black"}}> <ListItemText primary="Post e-cycle" /></Link>
              </ListItemButton>
            </List>
          </Collapse>
          
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon></ListItemIcon>
                <Link to="/managecycle" style={{textDecoration:"none",color:"black"}}> <ListItemText primary="Manage e-cycle" /></Link>
              </ListItemButton>
              
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemIcon>
              <DoneAllIcon/>
            </ListItemIcon>
            <Link style={{textDecoration:"none",color:"black"}}> <ListItemText primary="Order Details" /></Link>
          </ListItemButton>
        </List>
        </Paper>
      </div>
    );

}

export default SideAdmin;