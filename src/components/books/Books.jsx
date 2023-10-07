import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Books = () => {
    const [Bn,setBn]=useState('');
    const [At,setAt]=useState('');
    const [Pu,setPu]=useState('');
    const[error,setError] =useState(false);
    const setBookname=(event) =>{
        event.preventDefault();
        console.log(event.target.value);
        setBn(event.target.value);
 }

 const setAuthor=(event) =>{
    event.preventDefault();
    console.log(event.target.value);
    setAt(event.target.value);
}

const setPublisher=(event) =>{
    event.preventDefault();
    console.log(event.target.value);
    setPu(event.target.value);
}
const checkfilldata =(event) =>{
    event.preventDefault();
    if(Bn.trim ()===''|| At.trim()==='' || Pu.trim()==='')
    {
setError(true);


return;
    }
    const myobj={
        bookname:Bn,
        author:At,
        publisher:Pu
}
fetch("https://sample-18609-default-rtdb.firebaseio.com/sample.json,"
{
    method:"POST",
    body:JSON.stringify(myobj),
    headers:{"content-Type":"application/json"}
}
);
}
  return (
    <div>
 <form>
        <TextField id="outlined-basic" label="Book name" variant="outlined" onChange={setBookname}/><br/><br/>
    <TextField id="outlined-basic" label="Author" variant="outlined" onChange={setAuthor} /><br/><br/> 
    <TextField id="outlined-basic" label="Publisher" variant="outlined" onChange={setPublisher}/><br/><br/>
    <Button variant="contained" onClick={checkfilldata}>SAVE </Button>
    {error && 'error Occured'}
        </form>
    </div>
  )
}

export default Books