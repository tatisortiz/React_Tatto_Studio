import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Register } from '../Register/Register.jsx'
import { Home } from '../Home/Home.jsx'
import { Profile } from '../Profile/Profile.jsx'
import { Login } from '../Login/Login.jsx'
import { Admin } from '../Admin/Admin.jsx'
import { Services } from '../Services/Services.jsx'
import { Appointments } from '../Appoinments/Appoinments.jsx'





export const Body = () => {
  const passport = JSON.parse(localStorage.getItem("passport"));
  let role = null;
  if (passport) {
    role = passport.tokenData.role_id;
  }
 

  return (
    <>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={< Services />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/profile" element={<Profile />} />
       
        {  role === 2 && 
        <Route path="/admin" element={<Admin/>}/>
      }
      </Routes>
    </>
  );
};
