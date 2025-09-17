import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <h2>signup</h2>
      <TextField label="Email" variant='outlined'/>
      <br />
      <TextField label="passWord" variant='outlined'/>
      <br />
      <TextField label="confirmpassWord" variant='outlined'/>
      <br /><br />
      <Button variant="contained">Signup</Button>
    </div>
  )
}

export default Signup
