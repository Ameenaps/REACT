import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
  var[input,setinput]=useState({Name:"",Age:"",Dept:"",Sal:""})
  var navigate=useNavigate()
  var loc=useLocation()
  console.log(loc.state)
  const inputHandler=(e)=>{
    setinput({...input,[e.target.name]:e.target.value})
    
    console.log(input)
  }
  const Submit=()=>{
if(loc.state==null){
      axios.post("http://localhost:3004/add",input)
    .then(
      (res) =>{
        alert(res.data)
        navigate("/view")
      }
    
    )

}
else{
        axios.put("http://localhost:3004/update/"+loc.state.val._id,input)
    .then(
      (res) =>{
        alert("updated")
        navigate("/view")
      }
    
    )
}

  }

    if(loc.state!==null){
      useEffect(()=>{
        setinput({...input,
            Name:loc.state.val.Name,
            Age:loc.state.val.Age,
            Dept:loc.state.val.Dept,
            Sal:loc.state.val.Sal,
        })
      },[])
    }
  return (
    <div>
        <br /><br />
      <h1>Add</h1>
      <TextField variant="outlined" label="Name"
      name='Name'
      value={input.Name}
      onChange={inputHandler}/>
      <br></br><br />
      <TextField variant="outlined" label="Age"
      name='Age'
      value={input.Age}
      onChange={inputHandler}/>
      <br></br><br />
      <TextField variant="outlined" label="Dept"
      name='Dept'
      value={input.Dept}
      onChange={inputHandler}/>
      <br></br><br />
      <TextField variant="outlined" label="Sal"
      name='Sal'
      value={input.Sal}
      onChange={inputHandler}/>
      <br></br><br />
      <Button variant='contained' onClick={Submit}>submit</Button>
    </div>
  )
}

export default Add
