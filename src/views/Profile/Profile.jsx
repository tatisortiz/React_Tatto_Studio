import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile } from "../../Services/apiCalls";
import { CInput } from "../../components/CInput/CInput";




export const Profile= () => {
   const [profileData, setProfileData ]= useState({
    name: "",
    email: "",
    
   });
   const [editData, setEditData] = useState({
    name: "",
    email: "",
   });

   const [editting, setEditting] = useState(false);
   const passport = JSON.parse(localStorage.getItem("passport"))
  
   const navigate = useNavigate()
   const token = passport.token

   
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
    
   const editButtonHandler = () => {
    setEditData({
      name: profileData.name,
      email: profileData.email
    })
    setEditting(!editting);
   };

   const editInputHandler = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
    
   };

   const confirmButtonHandler = async () =>{
    const response = await updateProfile(editData,token)
   }

 
    
     return (
    <>
     <h2>profile</h2>
     <p className= {editting ? "hidden" : ""}>
      Name:{profileData.name ? profileData.name : "not available" } </p>
      <CInput
        type="text"
        name="name"
        placeholder="name"
        className={editting ? "" : "hidden"}
        emitFunction={editInputHandler}
      />
    
     
     <p className={editting ? "hidden" : ""}>
      Email:{profileData.email} </p>
      < CInput
        type="email"
        name="email"
        placeholder={editData.email}
        className={editting ? "" : "hidden"}
        emitFunction={editInputHandler}
      />
      <CInput
        type="button"
        name="edit"
        value={editting ? "cancel" : "edit" }
        emitOnClickButton={editButtonHandler}
      />

<CInput
        type="button"
        name="edit"
        value="save"
        className={editting ? "" : "hidden" }
        emitOnClickButton={confirmButtonHandler}
      />

   
    </>
  )
}

