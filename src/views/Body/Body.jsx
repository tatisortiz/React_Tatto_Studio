import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Register } from '../Register/Register'
import { Home } from '../Home/Home'
import { Login } from '../Login/Login'
import { Services } from '../Services/Services'

export const Body = () => {
  return (
    <>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/services" element={<Services/>}/>
       
  
      </Routes>
    
    
    </>
  )
}
