import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import Surfer from './Surfer'; // Asegúrate de importar el componente Surfer correctamente

export const Header = () => {
    const navigate = useNavigate();
    const passport = JSON.parse(localStorage.getItem("passport"));
    const role = passport?.role; 
    const token = passport?.token;

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
            {role === 2 ? (<Surfer path="/admin" content="Admin" />) : null}
            {token ? (
                <NavLink to="/login" onClick={logOut}>Logout</NavLink>
            ) : null}
        </header>
    );
};
