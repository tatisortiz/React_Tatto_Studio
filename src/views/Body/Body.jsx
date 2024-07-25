import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Register } from '../Register/Register.jsx'
import { Home } from '../Home/Home.jsx'
import { Services } from '../Services/Services.jsx'
import { Appoinments } from '../Appoinments/Appoinments.jsx'
import { Profile } from '../Profile/Profile.jsx'
import { Login } from '../Login/Login.jsx'
import { Admin } from '../Admin/Admin.jsx'




export const Body = () => {
  const passport = JSON.parse(localStorage.getItem("passport"));
  let role = null;
  if (passport) {
    role = passport.tokenData.role;
  }

  return (
    <>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointments" element={<Appoinments />} />
        <Route path="/profile" element={<Profile />} />
       
        {  role === "admin" && 
        <Route path="/admin" element={<Admin/>}/>
      }
      </Routes>
    </>
  );
};
