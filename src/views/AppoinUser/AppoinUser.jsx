import React, { useEffect, useState } from "react";
import "./AppoinUser.css";
import { deleteAppointmentById, getMyAppointments } from "../../Services/apiCalls";

export const AppointUser = () => {
  const [appointments, setAppointments] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const passport = JSON.parse(localStorage.getItem("passport"));

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!passport || !passport.token) {
        setErrorMessage("Usuario no autenticado");
        return;
      }

      try {
        const response = await getMyAppointments(passport.token);
        if (response.success && response.data.length > 0) {
          setAppointments(response.data);
        } else {
          setErrorMessage("No hay citas disponibles");
        }
      } catch (error) {
        setErrorMessage("Ocurrió un error al obtener las citas");
      }
    };

    fetchAppointments();
  }, [passport]);

  const deleteApptHandler = async (e) => {
    const id = +e.target.name;

    try {
      const response = await deleteAppointmentById(passport.token, id);
      if (response.success) {
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appt) => appt.id !== id)
        );
      } else {
        setErrorMessage("No se pudo eliminar la cita");
      }
    } catch (error) {
      setErrorMessage("Ocurrió un error al eliminar la cita");
    }
  };

  return (
    <div className="myappointment-box">
      <h2>Mis Citas</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {appointments.length > 0 ? (
        appointments.map((appointment) => (
          <div className="appointments-info" key={appointment.id}>
            <div className="date">{appointment.appointment_date}</div>
            <div className="service">{appointment.service_id}</div>
            <div className="cancel">
              <input
                type="button"
                value="Eliminar"
                name={appointment.id}
                onClick={deleteApptHandler}
              />
            </div>
          </div>
        ))
      ) : (
        !errorMessage && <p>No tienes citas.</p>
      )}
    </div>
  );
};

export default AppointUser;
