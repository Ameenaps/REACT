import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {

    var[ a,seta ]=useState("Aami")
    var[ b,setb]=useState("athu")

    const ChangeName = (e) => {
        console.log(e.target.value)
    seta(e.target.value)    }
    const ClickName = () => {

        setb(a)}
      return (
    <div>
      <h1>Welcome {b}</h1>
      <TextField variant='outlined' onChange={ChangeName}/>
      <br /> <br />
      <Button variant='contained' onClick={ClickName}>click</Button>
    </div>
  )
}

export default StateBasics
