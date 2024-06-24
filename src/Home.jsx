import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [link, setLink] = useState()

  return (
    <div style={{width:'100% ', height:"100vh", display:'flex', justifyContent:'center', alignItems:"center"}}>
       <Link to='/meet' style={{backgroundColor:'blue', height:"50px", borderRadius:'20px', padding:'10px', color:'white' }}>New Meeting</Link>


       <input type="text" style={{backgroundColor:'white', color:'black' ,height:"50px", borderRadius:'20px',   }} placeholder='Enter the link' onChange={e => setLink(e.target.value)} />
       <Link to={link} style={{backgroundColor:'blue', height:"50px", borderRadius:'20px', padding:'10px', color:'white' }}>Join Meeting</Link>
    </div>
  )
}

export default Home
