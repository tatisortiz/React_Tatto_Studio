import React, { useEffect, useState } from "react";
import "./AppoinUser.css";
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
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const passport = JSON.parse(localStorage.getItem("passport"));

  useEffect(() => {
    const fetchAppointments = async () => {
      if (passport && passport.token) {
        try {
          const response = await getMyAppointments(passport.token);
          if (response.success) {
            setAppointments(response.data);
            setMessage("Appointments loaded successfully");
          } else {
            setError("Failed to load appointments");
          }
        } catch (error) {
          setError("An error occurred while fetching appointments");
        }
      } else {
        setError("User not authenticated");
      }
    };

    fetchAppointments();
  }, [passport]);

  const handleDeleteAppointment = async (id) => {
    try {
      const response = await deleteAppointmentById(id, passport.token);
      if (response.success) {
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.id !== id)
        );
        setMessage("Appointment deleted successfully");
      } else {
        setError("Failed to delete appointment");
      }
    } catch (error) {
      setError("An error occurred while deleting the appointment");
    }
  };

  return (
    <div className="myappointment-box">
      <h2>My Appointments</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      {appointments.length > 0 ? (
        appointments.map((appointment) => (
          <div className="appointments-info" key={appointment.id}>
            <div className="date">{formatDate(appointment.appointment_date)}</div>
            <div className="service">{appointment.service_id}</div>
            <div className="cancel">
              <button onClick={() => handleDeleteAppointment(appointment.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
};

export default AppointUser;

