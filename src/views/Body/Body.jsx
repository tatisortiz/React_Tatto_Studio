import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Register } from '../Register/Register.jsx'
import { Home } from '../Home/Home.jsx'
import { Services } from '../Services/Services.jsx'
import { Appoinments } from '../Appoinments/Appoinments.jsx'
import { Profile } from '../Profile/Profile.jsx'
import { Login } from '../Login/Login.jsx'


export const Body = () => {
  return (
    <>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path= "/login" element={<Login/>}/>
       <Route path="/services" element={<Services/>}/>
       <Route path="/appoinments" element={<Appoinments/>}/>
       <Route path="/profile" element={<Profile/>}/>
      </Routes>
    
    
    </>
  )
}
