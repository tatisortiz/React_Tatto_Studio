import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProfile } from '../../Services/apiCalls'


export const Profile = () => {
   const [profileData, setProfileData ]= useState({
    name: "",
    email: "",
    
   })
   const passport = JSON.parse(localStorage.getItem("passport"))
  
   const navigate = useNavigate()

   
   useEffect( ()=> {
    if(!passport){
    navigate("/login",)
    }
    else {
        const bringMyProfile = async () => {
        const response = await getProfile(passport.token)
        setProfileData (response.data)
          console.log(response)
        }
        bringMyProfile()
     }
   }, []);
    
 
    
     return (
    <>
     <h2>profile</h2>
     <p>Name:{profileData.name} </p>
     <p>Email:{profileData.email} </p>
    
   
    </>
  )
}
