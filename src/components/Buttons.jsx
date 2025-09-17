import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Buttons = () => {
     
     var[ a,seta ]=useState()
     const btn1=()=>{
        seta("react")
     }

     const btn2=()=>{
        seta("angular")

     }
     const btn3=()=>{
        seta("nest")
     }

  return (
    <div>
      <h1>Welcome {a}</h1>
      <Button variant='contained' onClick={btn1}>react</Button> &nbsp;
      <Button variant='contained' onClick={btn2}>angular</Button> &nbsp;
      <Button variant='contained' onClick={btn3}>nest</Button>
    </div>
  )
}

export default Buttons
