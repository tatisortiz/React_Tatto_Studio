import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
    const passport = JSON.parse(localStorage.getItem("passport"));
    const logOut = () => {
        localStorage.removeItem("passport");
        navigate("/login");
      };
    return (
        <header className="header">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/register" className="nav-link">Register</NavLink>
            <NavLink to="/login" className="nav-link">Login</NavLink>
            <NavLink to="/services" className="nav-link">Services</NavLink>
            <NavLink to="/appointments" className="nav-link">Appointments</NavLink>
            <NavLink to="/admin" className="nav-link">Admin</NavLink>
            <NavLink to="/login" onClick={logOut}>Logout</NavLink>
        </header>
    );
};

