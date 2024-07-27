import React, { useEffect, useState } from "react";
import "./AppoinUser.css";
import { NavLink } from "react-router-dom";
import { deleteAppointmentById, getMyAppointments } from "../../Services/apiCalls";

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const AppointUser = () => {
  const [AppointUser, setAppointUser] = useState([]);

  const passport = JSON.parse(localStorage.getItem("passport"));

  useEffect(() => {
    const bringMyAppointments = async () => {
      const response = await getMyAppointments(passport.token);
      setAppointUser(response.data);
      console.log(response);
    };
    bringMyAppointments();
  }, [passport.token]);

  const deleteApptHandler = async (e) => {
    const id = +e.target.name;
    const response = await deleteAppointmentById(passport.token, id);
    if (response.success) {
      setAppointUser((prevAppointments) =>
        prevAppointments.filter((appt) => appt.id !== id)
      );
    }
  };

  return (
    <div className="myappointment-box">
      <h2>My Appointments</h2>
      {AppointUser.map((appointment) => (
        <div className="appointments-info" key={appointment.id}>
          <div className="date">{formatDate(appointment.appointment_date)}</div>
          <div className="service">{appointment.service_id}</div>
          <div className="cancel">
            <input
              type="button"
              value="delete"
              name={appointment.id}
              onClick={deleteApptHandler}
            />
          </div>
        </div>
      ))}
      <div className={AppointUser.length > 0 ? "hidden" : ""}>
        <p>
         you don't have dates{" "}
          <NavLink to="/createapp">Create Appoint</NavLink>.
        </p>
      </div>
    </div>
  );
};

export default AppointUser;

