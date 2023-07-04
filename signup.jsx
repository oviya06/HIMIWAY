import { Typography } from '@mui/material';
import './signup.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

function Signup (){

    const [emailid, setEmailid] = useState("");
    const [username, setUsername] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
      
        async function handleSubmit(event)
         {
             event.preventDefault();
             if (!emailid || !username || !mobileno || !address|| !password) {
                alert('Please fill in all the mandatory fields.');
                return;
              }
         try
             {
              await axios.post("http://localhost:8080/postSaveSignupDetails",
             {
                emailid: emailid,
                username: username,
                mobileno:mobileno,
                address:address,
                password: password
             });
                alert("User Registation Successfully");
                setEmailid("");
                setUsername("");
                setMobileno("");
                setAddress("");
                setPassword("");
             }
         catch(err)
             {
               alert("User Registation Failed");
             }
        }

    return(
        <div className='signup-whole'>
        <Box  className='signup_box_9' style={{opacity:"88%"}}>
            <Paper className='signup_paper_10'>
                <form onSubmit={handleSubmit}>
                   <Typography variant='h3' > Signup</Typography>

                   <Stack direction="row" spacing={10}>
                        <label><Typography variant='h5' style={{fontFamily:"cursive"}}>Email Id</Typography></label>
                        <pre/>
                        <label><Typography variant='h5' style={{fontFamily:"cursive"}}>Username</Typography></label>
                   </Stack>

                   <Stack direction="row" spacing={9}>
                        <TextField  label="Email" type='email' name='emailid'  onChange={(event) =>{setEmailid(event.target.value);}} required/>
                        <TextField label="Username" type='text' name='username'  onChange={(event) =>{setUsername(event.target.value);}} required/>
                   </Stack>

                   <Stack direction="row" spacing={9}>
                        <label style={{fontFamily: 'cursive'}}><Typography variant='h5' style={{fontFamily:"cursive"}}>Mobile No</Typography></label>
                        <pre/>
                        <label style={{fontFamily: 'cursive'}}><Typography variant='h5' style={{fontFamily:"cursive"}}>Address</Typography></label>   
                   </Stack>

                   <Stack direction="row" spacing={9}>
                        <TextField label="Mobile no" type="number" name='mobileno'  onChange={(event) =>{setMobileno(event.target.value);}} required/>
                        <TextField label="Address" type="text" name='address'  onChange={(event) =>{setAddress(event.target.value);}} required/>     
                   </Stack>

                   <Stack direction="row" spacing={9}>
                        <label style={{fontFamily: 'cursive'}}><Typography variant='h5' style={{fontFamily:"cursive"}}>Password</Typography></label>
                        <pre/>
                   </Stack>

                   <Stack direction="row" spacing={9}>
                        <TextField label="Password" type="password" name='password'  onChange={(event) =>{setPassword(event.target.value);}} required/> 
                   </Stack>

                        <br/><Button onClick={handleSubmit} variant="contained" type='submit' style={{backgroundColor:"maroon"}}><Link to="/" style={{color:"white",textDecoration:"none"}}>Submit</Link></Button>
                        <pre/>Already have an account? <Link to="/" style={{textDecoration:"none",color:"maroon"}}>Login Here</Link><br/>
                </form>
            </Paper>
        </Box>
        </div>
    );

}

export default Signup;