import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
  var navigate=useNavigate()
  var [emp, set] = useState([])
  axios.get("http://localhost:3004/view")
    .then((res) => {
      set(res.data);
    })
  var Del = (id) =>{
    axios.delete(`http://localhost:3004/remove/${id}/`)
    .then(
      (res) => {
      alert('Deleted succesfully',res)
    }
  )
  }
  const uFunction=(val)=>{
    navigate("/Add",{state:{val}})
  }
  return (
    <div>
      <br /> <br /> <br />
      <h1> Employee Details</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              emp.map((val) => {
                return (
                  <TableRow key={val._id}>
                    <TableCell>{val.Name}</TableCell>
                    <TableCell>{val.Age}</TableCell>
                    <TableCell>{val.Dept}</TableCell>
                    <TableCell>{val.Sal}</TableCell>
                    <Button variant='contained' onClick={()=>Del(val._id)}>Delete</Button>
                    <Button variant='contained' onClick={()=> uFunction(val)}>Update</Button> 
                  </TableRow>
                )
              }
              )
            }
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default View