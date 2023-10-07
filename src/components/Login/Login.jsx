import {TextField } from '@mui/material';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
const Login = () => {
    const [Un,setUn]=useState('');
    const [Pwd,setPwd]=useState('');
    const[error,setError] =useState(false);
    const navigate=useNavigate();

const readusername =(event) =>{
    console.log(event.target.value);
    Un(event.target.value);
}
const readpsswd =(event) =>{
    console.log(event.target.value);
    Pwd(event.target.value);
}
const checkfilldata =(event) =>{
    if(Un.trim ()===''|| Pwd==='')
    {
setError(true);
return;
    }
    else{
        Navigate("/home");
}
   
   }
    return (
    <div><h1>Sign in</h1>
    <form>
    <TextField id="outlined-basic" label="Course name" variant="outlined" onChange={readusername} /><br/><br/>
    <TextField id="outlined-basic" label="Duration" variant="outlined" onChange={readpsswd}/><br/><br/>
    <TextField id="outlined-basic" label="Course fee" variant="outlined" onChange={checkfilldata}/><br/><br/>   
        <button onClick={checkfilldata} variant="contained">Submit</button>
        {error && 'error Occured'}
    </form>
    </div>
  )
}
export default Login
