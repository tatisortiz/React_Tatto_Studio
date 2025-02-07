const URL = 'http://localhost:4000'


export const registerUser = async (credentials) => {
    const request = await fetch(`${URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });

    const result = await request.json();
    
    return result;
}

export const loginUser = async (credentials) => {
    const request = await fetch(`${URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    },);

    const result = await request.json();
    
    return result;

}
export const getServices = async () => {
    const response = await fetch(`${URL}/api/services`);
    return await response.json();
  };
export const getProfile = async (token) => {
    const response = await fetch(`${URL}/api/users/profile`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
             "Authorization":  `Bearer ${token}`
        },
  
    });

    return await response.json();
    
 

}

 export const updateProfile = async (data,token) => {
    const response = await fetch(`${URL}/api/users/profile`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
           "Authorization":  `Bearer ${token}`
        },
        body: JSON.stringify(data)
  
    });

    return await response.json()


 }

 export const getAllUsers = async (token) => {
    const response = await fetch(`${URL}/api/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`
        },
  
    });

    return await response.json();
    
 

}

export const deleteUserById = async (token,id) => {
    console.log(id)
    const response = await fetch(`${URL}/api/users/profile/${id}`,{
        method: "DELETE",
        headers :{
            "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`
        }
    })
    return await response.json()
}

export const createAppointments = async (credentials, token) => {
    try {
        const request = await fetch(`${URL}/api/appointments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(credentials),
        });
        const result = await request.json();
        return result;
    } catch (error) {

    }
}




export const getMyAppointments = async (token) => {
    const response = await fetch(`${URL}/api/appointments`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`
        },
  
    });

    return await response.json();
    
 

}
export const deleteAppointmentById = async (token, id) => {
    const response = await fetch(`${URL}/api/appointments/${+id}`, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    return await response.json();
  };