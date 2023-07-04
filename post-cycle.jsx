import { Typography } from '@mui/material';
import './post-cycle.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState } from 'react';

function Manage (){

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [shipping, setShipping] = useState("");
    const [img, setImg] = useState("");
      
        async function handleSubmit(event)
         {
             event.preventDefault();
             if (!title || !price || !color || !shipping|| !img) {
                alert('Please fill in all the mandatory fields.');
                return;
              }
         try
             {
              await axios.post("http://localhost:8080/postSaveCycleDetails",
             {
               title: title,
               price: price,
               color:color,
               shipping:shipping,
               img: img
             });
                alert("Posted Successfully");
                setTitle("");
                setPrice("");
                setColor("");
                setShipping("");
                setImg("");
             }
         catch(err)
             {
               alert("Can't post,try again");
             }
        }

    return(
        <div>
        <Box  className='manage_box_9' style={{opacity:"88%"}}>
            <Paper className='manage_paper_10'>
                <form onSubmit={handleSubmit}>
                   <Typography variant='h3' > Post E-cycle</Typography>
                   <br/>
                   <Stack direction="row" spacing={12.5}>
                        <label><Typography variant='h5' style={{fontFamily:"cursive"}}>Title</Typography></label>
                        <pre/>
                        <label><Typography variant='h5' style={{fontFamily:"cursive"}}>Price</Typography></label>
                   </Stack>

                   <Stack direction="row" spacing={9}>
                        <TextField  label="Title" type='text' name='title'  onChange={(event) =>{setTitle(event.target.value);}} required/>
                        <TextField label="Price" type='text' name='price'  onChange={(event) =>{setPrice(event.target.value);}} required/>
                   </Stack>

                   <Stack direction="row" spacing={12.5}>
                        <label style={{fontFamily: 'cursive'}}><Typography variant='h5' style={{fontFamily:"cursive"}}>Color</Typography></label>
                        <pre/>
                        <label style={{fontFamily: 'cursive'}}><Typography variant='h5' style={{fontFamily:"cursive"}}>Shipping</Typography></label>   
                   </Stack>

                   <Stack direction="row" spacing={9}>
                        <TextField label="Color" type="text" name='color'  onChange={(event) =>{setColor(event.target.value);}} required/>
                        <TextField label="Shipping" type="text" name='shipping'  onChange={(event) =>{setShipping(event.target.value);}} required/>     
                   </Stack>

                   <Stack direction="row" spacing={9}>
                        <label style={{fontFamily: 'cursive'}}><Typography variant='h5' style={{fontFamily:"cursive"}}>Image Link</Typography></label>
                        <pre/>
                   </Stack>

                   <Stack direction="row" spacing={9}>
                        <TextField label="Image Link" type="text" name='img'  onChange={(event) =>{setImg(event.target.value);}} required/> 
                   </Stack>

                        <br/><Button onClick={handleSubmit} variant="contained" type='submit' style={{backgroundColor:"maroon"}}>Post</Button>
                       
                </form>
            </Paper>
        </Box>
        </div>
    );

}

export default Manage;