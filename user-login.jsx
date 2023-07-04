import { Typography } from '@mui/material';
import './user_login.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {Link,useNavigate} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function UserLogin (){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
 
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/login", {
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
                    navigate("/home");
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
        <div className='login-whole'>
        <Box  className='login_box_9' style={{opacity:"88%"}}>
            <Paper className='login_paper_10'>
                <form>
                   <Typography variant='h3' >Login</Typography>
                <label><Typography variant='h5' style={{fontFamily:"cursive"}} required>Username</Typography></label>
                        <pre/>
                        <TextField  label="Username" type='text' name='username' onChange={(event) => {setUsername(event.target.value);}}/>
                        <br/>
                        <pre/>
                        <label style={{fontFamily: 'cursive'}}><Typography variant='h5' style={{fontFamily:"cursive"}} required>Password</Typography></label>
                        <pre/>
                        <TextField label="Password" type="password" name='password' onChange={(event) => {setPassword(event.target.value);}} />
                        <br/>
                        <pre/>
                        <Button variant="contained" onClick={login} style={{backgroundColor:"maroon"}}>Login</Button>
                        
                        <br/>
                        <pre/>
                        Admin -
                        <Link to="/adminlogin" style={{textDecoration:"none",color:"maroon"}}> Login as admin</Link>
                        <br/>Don't have an account? 
                        <Link to="/signup" style={{textDecoration:"none",color:"maroon"}}>Signup Here</Link><br/>
                        <Link  to="/forgotpass" style={{textDecoration:"none",color:"maroon"}}>Forgot Password ?</Link>
                </form>
            </Paper>
        </Box>
        </div>
    );

}

export default UserLogin;