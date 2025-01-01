import React from 'react'
import Button from '@mui/material/Button'

const App = () => {
  return (
    <div>
      <Button variant='contained' color='secondary' sx={{color:"#000", marginTop:"20px",ml:"10px"}}>Hello</Button>
      <Button variant="contained" color='error' >Warning</Button>
      <p style={{color:"red", marginTop:"50px",backgroundColor:"yellow",padding:"10px",borderRadius:"10px",Typography:"h1"}}>This is error</p>
    </div>
  )
}

export default App
