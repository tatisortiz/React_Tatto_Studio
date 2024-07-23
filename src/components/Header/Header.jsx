import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
    return (
        <header className="header">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/register" className="nav-link">Register</NavLink>
            <NavLink to="/login" className="nav-link">Login</NavLink>
            <NavLink to="/services" className="nav-link">Services</NavLink>
            <NavLink to="/appointments" className="nav-link">Appointments</NavLink>
        </header>
    );
};

