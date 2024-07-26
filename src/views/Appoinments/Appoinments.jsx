import { useEffect, useState } from "react";
import { getAllAppointmens } from "../../Services/apiCalls";
import "./Appoinments.css"


export const Appointments = () => {
  const [appointments, setAppoinments] = useState([]);
  const passport = JSON.parse(localStorage.getItem("passport"));

  

  useEffect(() => {
    const fetchAppoinemnts = async () => {
      try {
        const response = await getAllAppointmens(passport.token);
        setAppoinments(response.data);
      } catch (error) {
        console.error("Error fetching appoinments:", error);
      }
    };

    fetchAppoinemnts();
  }, []);

  return (
    <div className="app">
      <h1> App</h1>
     
        <div className="body">
          {appointments.map((appointments) => (
            <div className="appoone" key={appointments.id}>
              <div className="appoint1" >{appointments.service_id}</div>
              <div className="appoint" >{appointments.appointment_date}</div>
          
            </div>
          ))}
        </div>
      
    </div>
  );
};