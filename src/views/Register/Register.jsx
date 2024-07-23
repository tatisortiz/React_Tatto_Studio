import React, { useState } from "react";
import "./Register.css";

export const Register = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    console.log("Handle Change");

    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  console.log(credentials);

  return (
  
      <div>
        <h1>Register</h1>
        <h2>Create an account or login</h2>

        <input
          type="text"
          name="email"  
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input type="button" value="Register" />
      </div>
  );
};
