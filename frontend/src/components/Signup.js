import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import axios from 'axios';
import './signup.css'
import { useNavigate } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Signup = () => {
   const history = useNavigate() 
   const [inputs, setInputs] = useState({
      name:" ",
      fName: " ",
      lName:" ",
      email:" ",
      password:" ",
      phone:" ",
   });
   const handleChange = (e) =>{
      setInputs(prev =>({
         ...prev,
         [e.target.name]:e.target.value
      }))
      // console.log(e.target.name,"value",e.target.value);
   }
   const sendRequest = async()=>{
      const res = await axios.post('http://localhost:5000/api/register',{
         name:inputs.fName, 
         fname: inputs.fName,
          lname: inputs.lName,
          email: inputs.email,
          password: inputs.password,
          phone: inputs.phone
      })
      .catch(err=> console.log(err));
         const data = await res.data;
         return data;
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(inputs);
      sendRequest().then(()=>history("/login"));
   }
  return (
    <div> 
      <main className='main-class'>
      <div className='first-div'>
      {/* <img className='image-logo' src='./photos/images.jpg' alt=''/> */}
      <img className='image-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHhKZpfcmSxalCi2_S8hnPEqQwVhC24vsv3LawKh9NghVqYWlynDCZuawxMLZHvI5Va4&usqp=CAU' alt=''/>
         {/* <h2>TRANZACT</h2> */}
         <p>Have an account?</p><a href='www'>Sign In</a>
      </div>
      <form onSubmit={handleSubmit}>
         <div className='second-div'>
          <Box>
            <TextField name='fName' onChange={handleChange} value={inputs.fName} className='first-box' id="outlined-basic" label="First Name" variant="outlined" />
            <TextField name='lName' onChange={handleChange} value={inputs.lName} className='second-box' id="outlined-basic" label="Last Name" variant="outlined" />
          </Box>
         </div>
         <div className='third-div'>        
            <TextField name='email' onChange={handleChange} value={inputs.email} className='third-box' id="outlined-basic" label="Email" variant="outlined" />
         </div>
         <div className='fourth-div'>
            <TextField name='password' type={"password"} onChange={handleChange} value={inputs.password} className='fourth-box' id="outlined-basic" label="Password" variant="outlined" />
         </div>
         <div className='fifth-div'>
            <TextField name='phone' type={"tel"} onChange={handleChange} value={inputs.phone} className='fourth-box' id="outlined-basic" label="Phone Number" variant="outlined" />
         </div>
         <div className='check'>
            <Checkbox {...label} defaultChecked />
            <label>I agree to Tranzact Privacy Policy & Terms of Service</label> <br/> <br/>
            <Button type='submit' variant="contained" color="success">
               Sign Up
            </Button>
         </div>
      </form>
      </main>
    </div>
  )
}

export default Signup