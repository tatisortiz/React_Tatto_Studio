import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Appointments.css';
import { createAppointments, deleteAppointmentById, getMyAppointments } from "../../Services/apiCalls";

export const Appointments = () => {
    const [myAppointments, setMyAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({
        appointment_date: "",
        service_id: "",
    });
    const passport = JSON.parse(localStorage.getItem("passport"));
    const navigate = useNavigate();

    const todayString = new Date().toISOString().split("T")[0];

    const formatDate = (isoDate) => {
        const appDate = new Date(isoDate);
        return appDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

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
                setMyAppointments([...myAppointments, response.data]);
                setNewAppointment({
                    appointment_date: "",
                    service_id: "",
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!passport) {
            navigate("/login");
            return;
        }
        const bringMyAppointments = async () => {
            try {
                const response = await getMyAppointments(passport.token);
                if (response.success && Array.isArray(response.data)) {
                    setMyAppointments(response.data);
                } else {
                    setMyAppointments([]);
                }
            } catch (error) {
                setMyAppointments([]);
            }
        };
        bringMyAppointments();
    }, [passport, navigate]);

    const deleteAppointmentHandler = async (e) => {
        const id = +e.target.name;
        const response = await deleteAppointmentById(passport.token, id);
        if (response.success) {
            const remainingAppointments = myAppointments.filter((appointment) => appointment.id !== id);
            setMyAppointments(remainingAppointments);
        } else {
            alert(response.message);
        }
    };

    return (
        <div className="appointments-wrapper">
            <div className="appointment-creation card shadow-lg p-5 mb-5 bg-white rounded">
                <h2 className="text-center mb-4">New Appointment</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="appointment_date">Date:</label>
                        <input
                            type="date"
                            id="appointment_date"
                            min={todayString}
                            value={newAppointment.appointment_date}
                            name="appointment_date"
                            onChange={(e) => inputHandler(e)}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="service_id">Service:</label>
                        <select
                            id="service_id"
                            name="service_id"
                            value={newAppointment.service_id}
                            onChange={(e) => inputHandler(e)}
                            className="form-control"
                        >
                            <option value="" disabled hidden>
                                Select a service...
                            </option>
                            <option value={1}>Custom tattoos</option>
                            <option value={2}>Catalogue Tattoo</option>
                            <option value={3}>Restoration and rejuvenation of works</option>
                            <option value={4}>Placement of piercings and dilators </option>
                            <option value={5}>Sale of piercings and other items</option>
                        </select>
                    </div>
                    <button
                        type="button"
                        onClick={handleSendAppointment}
                        className="btn btn-primary btn-lg btn-block mt-4"
                    >
                        Create Appointment
                    </button>
                </form>
            </div>

            <div className="appointments-list card shadow-lg p-5 bg-white rounded">
                <h2 className="text-center mb-4"> My Appointments</h2>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th className="text-center">id</th>
                                <th className="text-center">Appointment Date</th>
                                <th className="text-center">Service</th>
                                <th className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myAppointments.length ? (
                                myAppointments.map((appointment) => (
                                    <tr key={appointment.id}>
                                        <td className="text-center">{appointment.id}</td>
                                        <td className="text-center">{formatDate(appointment.appointment_date)}</td>
                                        <td className="text-center">{appointment.services ? appointment.services.title : "Service not found"}</td>
                                        <td className="text-center action-button">
                                            <button
                                                type="button"
                                                name={appointment.id}
                                                className="btn btn-danger btn-sm"
                                                onClick={deleteAppointmentHandler}
                                            >
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        No appointments assigned
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

