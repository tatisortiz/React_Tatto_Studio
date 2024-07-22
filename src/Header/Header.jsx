
import { useNavigate } from "react-router";
import { CSurfer } from "../CSurfer/CSurfer";
import "./Header.css"

export const Header = () => {
	const navigate = useNavigate();

	return (
		<>
		<div className="flex justify-space-betwwen">
			 
            <div onClick={() => navigate("/register")}> Register </div>
			
				
			
			</div>
		</>
	);
};
