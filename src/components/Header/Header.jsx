
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css"


export const Header = () => {
	

	return (
		<>
		
		<NavLink to = "/">Home</NavLink>
		<NavLink to = "/register">Register</NavLink>
		<NavLink to = "/login">Login</NavLink>
		<NavLink to = "/services">Services</NavLink>
	
			
				
			
		</>
	);
};
