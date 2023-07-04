import './home.css';
import * as React from 'react';
import EBM from '../assert/EBM-suite.webp';
import EBMPhone from '../assert/EBM-phone.webp';
import {Box,TextField,IconButton,CardMedia, Paper,Stack,Button,Menu,MenuItem} from '@mui/material';
import {Typography,Toolbar,AppBar} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PedalBikeSharpIcon from '@mui/icons-material/PedalBikeSharp';
import {Link} from "react-router-dom";

function Home() {
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



  return (
    <div className='home_backgroudColor_Whole_42'>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:"maroon"}} position="static">
        <Toolbar>
          <PedalBikeSharpIcon sx={{ flexGrow: 0.03 }}/>
            <Typography  variant='h6'>HIMIWAY</Typography>
              <Box sx={{ flexGrow: 1 }} />
                <button className='home_49_home' ><Typography>Home</Typography></button>
                <a href='#contact'><button className='home_49_home'><Typography>About Us</Typography></button></a>
                <button className='home_49_home'><Typography><Link to="/explore" style={{color:'white',textDecoration:"none"}}>Shop</Link></Typography></button>
                <a href='#contact'><button className='home_49_home'><Typography>Contact</Typography></button></a>
              <Box>
              <IconButton aria-controls={menuId} onClick={handleProfileMenuOpen} color="inherit">
                <AccountCircle />
              </IconButton>
            </Box> 
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
    <div className='home_backgroudImage_electric_66'>
      <div id='home_explore_67'>
        <Typography variant='h5' style={{fontFamily:"cursive"}}>EXPLORE NEW HORIZONS <br/>WITH YOUR E-BIKE</Typography ><br/>
        <Link to="/explore" style={{color:'white',textDecoration:"none"}}><Button variant="outlined" style={{color:"white",backgroundColor:"maroon",fontFamily:"cursive",border:"none"}}>
          Explore
        </Button></Link>
      </div>
    </div>
    <Stack direction="row">
      <Paper elevation={5} className='paper_EBM_78'>
        <CardMedia component="img" image={EBMPhone} alt='img'/>
      </Paper>
      <Paper elevation={5} className='paper_EBM_78'style={{backgroundColor:"maroon"}} >
        <div className='home_paper_div_1' style={{fontFamily:"cursive",color:"white"}}>
        we introduce Ebikemotion (EBM) which offers a group of products that all work together. The EBM app, 
        designed to be the most inclusive and flexible cycling app on the market, and the iWOC controller, 
        the handlebar remote for apps can work on any bike. The iWOC One, the phone/computer mount, is intended 
        for e-bikes, and the EBM LCD and EBM Touch are the two cyclo-computers designed for the purpose, which can still 
        be controlled via the iWOC remote.The iWOC One mount is a power supply for whatever display you choose 
        and serves as a Bluetooth control interface to your ebike. Slap the EBM LCD computer on there, 
        and you have a better way to control the bike. It’s black and white, waterproof, clear, and easy to use.
        The EBM Touch is the bigger, badder, color version of the EBM LCD, and has a SIM slot so you could theoretically use it as a phone.<pre/>

        Why you need to choose HIMIWAY ,here we go<pre/>

        ➼ Electric Assistance: Emphasize the convenience and ease of riding an HIMIWAY e-bike with electric assistance.The electric motor provides a boost to the rider's pedaling, making it easier to tackle hills and long distances.<br/>

        ➼ Eco-Friendly Transportation: HIMIWAY produce zero emissions and can be a greener alternative to motorcycles, contributing to a cleaner and healthier environment.<br/>

        </div>
      </Paper>
    </Stack>
    <Stack direction="row">
    <Paper elevation={5} className='paper_EBM_78' style={{backgroundColor:"maroon"}}>
      <div className='home_paper_div_2' style={{fontFamily:"cursive",color:"white"}}>

      ➼ Commuting and Mobility: HIMIWAY as a practical transportation option for commuting and urban mobility. Emphasize that we can help alleviate traffic congestion, provide a cost-effective way to get around, and offer the flexibility to navigate through crowded city streets.<br/>

      ➼ Health and Fitness: HIMIWAY offer a way to stay active and fit, as riders still need to pedal, but with the added assistance of the electric motor.<br/>

      ➼ Range and Battery Life: At Himiway, we understand the importance of extended rides and exploration without limitations. That's why our e-bicycles are designed with long battery life and an impressive range, allowing you to go the extra mile and embrace boundless adventures.<br/>

      ➼ Safety and Control: Safety is our top priority at Himiway, and our e-bicycles are equipped with cutting-edge features to ensure a secure and confident riding experience in any situation.<br/>
        
      ➼ Versatility: Himiway E-Bicycles are not just for one specific purpose—they are designed to be versatile and adaptable to suit your lifestyle in various ways.<br/>

      ➼ Design and Style: At Himiway, we believe that great performance should be accompanied by stunning design. Our e-bikes are not only high-performing but also boast a modern and sleek aesthetic that turns heads wherever you go.
      </div>
    </Paper>
    <Paper elevation={5} className='paper_EBM_78'>
      <CardMedia component="img" image={EBM} alt='img'/>
    </Paper>
    </Stack>
    <br/>
    <pre/>

    <div className='footer_div'>

    <Paper className='home_footer_74' style={{backgroundColor:"maroon"}}>
    
    <Typography className='footerclass' style={{marginTop:"390px",marginLeft:"40px"}}>Copyright © 2023 HIMIWAY Portal. All Rights Reserved</Typography>
    <Typography className='footerclass' style={{marginTop:"390px",marginLeft:"1100px"}}>Connect with Us:</Typography>
    <InstagramIcon className='footerclass'style={{marginTop:"390px",marginLeft:"1270px"}}/>
    <LinkedInIcon className='footerclass'style={{marginTop:"390px",marginLeft:"1240px"}}/>
    <TwitterIcon className='footerclass'style={{marginTop:"390px",marginLeft:"1300px"}}/> 
    <Typography className='footerclass' variant='h4'style={{marginTop:"30px",marginLeft:"40px",fontFamily:"sans-serif"}}>About us</Typography>
    <Typography className='footerclass' style={{marginTop:"80px",marginLeft:"50px"}}>Welcome to Himiway E-Bicycle, <br/>your ultimate destination
    for high-quality and innovative electric bicycles.<br/> We are passionate about providing eco-friendly transportation solutions<br/> that are not
    only efficient but also enjoyable and stylish.<br/>With a commitment to sustainability and a love for outdoor adventures,<br/>we strive to
    redefine your cycling experience with our range of electric bicycles.</Typography>
    <Typography  className='footerclass' variant='h4'style={{marginTop:"30px",marginLeft:"1040px",fontFamily:"sans-serif"}}>Feedback</Typography>
    <Typography className='footerclass' variant='h4' style={{marginTop:"30px",marginLeft:"650px",fontFamily:"sans-serif"}}>Contact us</Typography><br/>
    <CallIcon className='footerclass' style={{marginTop:"80px",marginLeft:"680px",fontFamily:"sans-serif"}}/>
    <Typography className='footerclass'style={{marginTop:"80px",marginLeft:"710px",fontFamily:"sans-serif"}}>+91 9363136358</Typography>
    <EmailIcon className='footerclass' style={{marginTop:"120px",marginLeft:"680px",fontFamily:"sans-serif"}}/>
    <Typography className='footerclass'style={{marginTop:"120px",marginLeft:"710px",fontFamily:"sans-serif"}}>oviyabalamurugan06@gmail.com</Typography>
    <TextField variant="filled"className='footerclass' label="Email" type='email' style={{marginTop:"80px",marginLeft:"1080px",backgroundColor:"white"}}/>
    <TextField id='contact'variant="filled" className='footerclass' label="Message" type='text' style={{marginTop:"10px",marginLeft:"1080px",backgroundColor:"white"}}/>
    <Button className='footerclass' style={{marginTop:"22px",marginLeft:"1220px",color:"white"}}>Send <SendIcon/></Button>
    
    </Paper>
    </div>
    </div>
  );
}

export default Home;
