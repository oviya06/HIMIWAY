import { Typography } from '@mui/material';
import './forgot-pass.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function ChangePassword (){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === 'username') {
        setUsername(value);
      } else if (name === 'password') {
        setPassword(value);
      } else if (name === 'confirmPassword') {
        setConfirmPassword(value);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  

      if (password !== confirmPassword) {
        console.error('New password and confirm password do not match.');
        return;
      }
  

      axios.put(`http://localhost:8080/updateSignupByUsername/${password}/${username}`, {
        username: username,
        newPassword: password,
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "not updated")
                {
                  alert("Not Updated");
                }
                  else
                {
                    alert("updated");
                }
        })
        .catch((error) => {
          console.error('Error changing password:', error);
        });
    };
    return(
        <div className='fpass-whole'>
        <Box  className='fpass_box_9' style={{opacity:"88%"}}>
            <Paper className='fpass_paper_10'>
                <form onSubmit={handleSubmit}>
                   <Typography variant='h3' >Password Recovery</Typography>
                        <label><Typography variant='h5' style={{fontFamily:"cursive"}} required>Username</Typography></label>
                        <pre/>
                        <TextField  label="Username" type='text' name='username' value={username} onChange={handleChange}/>
                        <br/>
                        <pre/>
                        <label style={{fontFamily: 'cursive'}}><Typography variant='h5' style={{fontFamily:"cursive"}} required>New Password</Typography></label>
                        <pre/>
                        <TextField label="New Password" type="password" name='password' value={password} onChange={handleChange}/>
                        <br/>
                        <pre/>
                        <label style={{fontFamily: 'cursive'}}><Typography variant='h5' style={{fontFamily:"cursive"}} required>Confirm Password</Typography></label>
                        <pre/>
                        <TextField label="Confirm Password" type="password" name='confirmPassword' value={confirmPassword} onChange={handleChange}/>
                        <br/>
                        <pre/>
                        <Button type='submit' variant="contained" style={{backgroundColor:"maroon"}}>Submit</Button>
                        <pre/>
                        <Link to="/" style={{textDecoration:"none",color:"maroon"}}>⇠ Back to Login</Link><br/>
                </form>
            </Paper>
        </Box>
        </div>
    );

}

export default ChangePassword;