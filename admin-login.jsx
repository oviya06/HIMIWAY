import { Typography } from '@mui/material';
import './admin-login.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import axios from 'axios';
import {Link,useNavigate } from "react-router-dom";

function AdminLogin (){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
 
    async function adminlogin(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/adminlogin", {
            username: username,
            password: password,
            }).then((res) =>
            {
                console.log(res.data);
                
                if (res.data.message === "Username not exits")
                {
                  alert("Username not exits");
                }
                else if(res.data.message === "Login Success")
                {
                    navigate("/signupdetails");
                }
                  else
                {
                    alert("Username and Password not match , plz check");
                }
          }, fail => {
           console.error(fail);
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      }
    return(
        <div className='admin-login-whole'>
        <Box  className='admin_login_box_9' style={{opacity:"66%"}}>
            <Paper className='admin_login_paper_10'>
                <form>
                   <Typography variant='h3' style={{color:"black"}} > Admin Login</Typography>
                <label><Typography variant='h5' style={{fontFamily:"cursive",color:"black"}}>Username</Typography></label>
                        <pre/>
                        <TextField  label="Username" type='text'  onChange={(event) => {setUsername(event.target.value);}}/>
                        <br/>
                        <pre/>
                        <label style={{fontFamily: 'cursive'}}><Typography variant='h5' style={{fontFamily:"cursive",color:"black"}}>Password</Typography></label>
                        <pre/>
                        <TextField label="Password" type="password"  onChange={(event) => {setPassword(event.target.value);}} />
                        <br/>
                        <pre/>
                        <Button variant="contained" onClick={adminlogin} style={{backgroundColor:"maroon"}}>Login</Button>
                        <br/>
                        <pre/>User -
                        <Link to="/" style={{textDecoration:"none",color:"maroon"}}> Login as user</Link>
                </form>
            </Paper>
        </Box>
        </div>
    );

}

export default AdminLogin;