import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { loginUser } from "../../Services/apiCalls";

export const Login = () => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }
     
    async function login() {
		try {
	      const response = await loginUser(credentials)

		  if(response.success){
	       const decodedToken = jwtDecode(response.token)
			const passport ={
				token: response.token,
				tokenData: decodedToken
			}

			localStorage.setItem("passport", JSON.stringify(passport))
	
		  } else {
			alert (response.message)

		  }
		} catch (error) {
			console.log(error)
		}
	}


    return (

        <div>
            <h1>login</h1>
            <h2>Create an account or login</h2>

            <input type="text" name="email" placeholder="Email" onChange={handleChange}
            />
            <input type="password" name="password" placeholder="Password" onChange={handleChange}
            />
            <input type="button" value="login" onClick={login}  />
        </div>
    );
};
