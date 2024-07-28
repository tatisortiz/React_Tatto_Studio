import React, { useState } from "react";
import { createAppointments } from "../../Services/apiCalls";
import "./CreateAppoint.css";
import { useNavigate } from "react-router-dom";

const CreateAppoint = () => {
  const navigate = useNavigate();

  const [newAppointment, setNewAppointment] = useState({
    appointment_date: "",
    service_id: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const todayString = new Date().toISOString().split("T")[0];

  const passport = JSON.parse(localStorage.getItem("passport"));

  const inputHandler = (e) => {
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendAppointment = async () => {
    try {
      const response = await createAppointments(newAppointment, passport.token);
      if (response.success) {
        setSuccessMessage("Appointment created successfully!");
        setNewAppointment({
          appointment_date: "",
          service_id: "",
        });
        // Redirige a '/appointuser' después de la creación exitosa
        navigate('/appointuser');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bookappointment-page">
      <div className="bookappointment-box">
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="date">
          <input
            type="date"
            min={todayString}
            value={newAppointment.appointment_date}
            name="appointment_date"
            onChange={inputHandler}
          />
        </div>
        <select name="service_id" value={newAppointment.service_id} onChange={inputHandler}>
          <option value="" disabled hidden>
            Choose...
          </option>
          <option value={1}>Custom tattoos</option>
          <option value={2}>Catalogue Tattoo</option>
          <option value={3}>Restoration and rejuvenation of works</option>
          <option value={4}>Placement of piercings and dilators </option>
          <option value={5}>Sale of piercings and other items</option>
        </select>
        <button onClick={handleSendAppointment}>Create Appointment</button>
      </div>
    </div>
  );
};

export default CreateAppoint;
