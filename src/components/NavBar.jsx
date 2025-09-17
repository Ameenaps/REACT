import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <h2>Myapp</h2>
            <Link to="/Login">
            <Button variant='contained'>Login</Button> </Link> &nbsp;  
            <Link to="/Signup">
            <Button variant='contained'>Signup</Button>  </Link>&nbsp; 
            <Link to="/GetTable">
            <Button variant='contained'>GetTable</Button></Link>&nbsp;
            <Link to="/StateBasics">
            <Button variant='contained'>StateBasics</Button></Link>&nbsp;
            <Link to="/Counter">
            <Button variant='contained'>Counter</Button></Link>&nbsp;
            <Link to="/Buttons">
            <Button variant='contained'>Buttons</Button></Link>&nbsp;
            <Link to="/Product">
            <Button variant='contained'>Product</Button></Link>&nbsp;
                </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
