import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[ c,setc ]=useState(0)
    const clicki = () =>{
        setc(c+1)
    }
    const clickd = () =>{
        setc(c-1)
    }
  return (
    <div>
      <h1>Counter</h1>
      <text>{c}</text><br /><br />
      <Button variant='contained' onClick={clicki}>+</Button>
            <Button  variant='contained' onClick={clickd}>-</Button>
    </div>
  )
}

export default Counter
