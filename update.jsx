import { Button, Typography } from '@mui/material';
import './update.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Paper from '@mui/material/Paper';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Editing() {
  const { sno } = useParams();
  const [values, setValues] = useState({
    sno: sno,
    title: "",
    price: "",
    color: "",
    shipping: "",
    img: ""
  });

  useEffect(() => {
    axios.get('http://localhost:8080/fetchIdCycle/' + sno)
      .then(res => {
        setValues({
          ...values,
          sno: res.data.sno,
          title: res.data.title,
          price: res.data.price,
          color: res.data.color,
          shipping: res.data.shipping,
          img: res.data.img
        });
      })
      .catch(err => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleSubmit = () => {
    axios.put('http://localhost:8080/putCycleDetails/'+ sno, values)
      .then(res => {
        console.log(res);
        navigate('/managecycle');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Box className='update_box_9' style={{ opacity: "88%" }}>
        <Paper className='update_paper_10'>
          <form onSubmit={handleSubmit}>
            <Typography variant='h3'>Update</Typography>
            <br />
            <Stack direction="row" spacing={12.5}>
              <label>
                <Typography variant='h5' style={{ fontFamily: "cursive" }}>Title</Typography>
              </label>
              <pre />
              <label>
                <Typography variant='h5' style={{ fontFamily: "cursive" }}>Price</Typography>
              </label>
            </Stack>

            <Stack direction="row" spacing={9}>
              <TextField label="Title" type='text' name='title' value={values.title} onChange={e => setValues({ ...values, title: e.target.value })} />
              <TextField label="Price" type='text' name='price' value={values.price} onChange={e => setValues({ ...values, price: e.target.value })} />
            </Stack>

            <Stack direction="row" spacing={12.5}>
              <label style={{ fontFamily: 'cursive' }}>
                <Typography variant='h5' style={{ fontFamily: "cursive" }}>Color</Typography>
              </label>
              <pre />
              <label style={{ fontFamily: 'cursive' }}>
                <Typography variant='h5' style={{ fontFamily: "cursive" }}>Shipping</Typography>
              </label>
            </Stack>

            <Stack direction="row" spacing={9}>
              <TextField label="Color" type="text" name='color' value={values.color} onChange={e => setValues({ ...values, color: e.target.value })} />
              <TextField label="Shipping" type="text" name='shipping' value={values.shipping} onChange={e => setValues({ ...values, shipping: e.target.value })} />
            </Stack>

            <Stack direction="row" spacing={9}>
              <label style={{ fontFamily: 'cursive' }}>
                <Typography variant='h5' style={{ fontFamily: "cursive" }}>Image Link</Typography>
              </label>
              <pre />
            </Stack>

            <Stack direction="row" spacing={9}>
              <TextField label="Image Link" type="text" name='img' value={values.img} onChange={e => setValues({ ...values, img: e.target.value })} />
            </Stack>

            <br />
            <Button variant="contained" type='submit' style={{ backgroundColor: "maroon" }}>
              Make Changes
            </Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default Editing;
