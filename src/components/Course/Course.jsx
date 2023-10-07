import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'

const Course = () => {
    const[cn,setcn]=useState('');
    const[d,setd]=useState('');
    const[cf,setcf]=useState('');

    const rdcn=(event)=>{
        console.log(event.target.value);
        setcn(event.target.value);
    }
    const rdd=(event)=>{
      console.log(event.target.value);
      setd(event.target.value);
  }
  const rdcf=(event)=>{
    console.log(event.target.value);
    setcf(event.target.value);
}

    return (
    <div>
        <form>
        <TextField id="outlined-basic" label="Course name" variant="outlined" onChange={rdcn}/><br/><br/>
    <TextField id="outlined-basic" label="Duration" variant="outlined"  onChange={rdd}/><br/><br/> 
    <TextField id="outlined-basic" label="Course fee" variant="outlined" onChange={rdcf}/><br/><br/>
    <Button variant="contained">SAVE</Button>
        </form>
    </div>
    )
    }
export default Course