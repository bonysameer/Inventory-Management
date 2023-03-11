import React, {useState} from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
//import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './design.css'


const Login = () => {
  
   const history = useNavigate();
   const [inputs, setInputs] = useState({
      // name:"",
      email:"",
      password:""
   })
   const handleChange = (e) =>{
      setInputs(prev=>({
         ...prev,
         [e.target.name]:e.target.value
      }))
   }
   const sendRequest = async () =>{
      const res = await axios
      .post('http://localhost:5000/api/login',{
         // name:inputs.name,
         email:inputs.email,
         password:inputs.password,
      }).catch(err=>console.log(err));
      const data = await res.data;
      return data;

   }
const handleSubmit = (e) =>{
   e.preventDefault();
   sendRequest().then(()=>history("/user"));
   //console.log(inputs);
};
return (
 <div className='log-div'>
   {/* <Typography>Signup</Typography> */}
   <form onSubmit={handleSubmit}>
      <Box 
         marginLeft="auto"
         marginRight="auto"
         width={300}
         display="flex"
         flexDirection={'column'}
         justifyContent="center"
         alignItems={'center'}
         >
         
         <Typography variant='h2'>Login</Typography>
         <TextField name='email' onChange={handleChange} type={'email'} value={inputs.email} variant='outlined' placeholder='Email' margin='normal'>
         
         </TextField>
         <TextField name='password' onChange={handleChange} type={'password'} value={inputs.password} variant='outlined' placeholder='Password' margin='normal'>
         </TextField>
         <Button variant='contained' type='submit'>Login</Button>
      </Box>
   </form>
 </div>
  );
};

export default Login