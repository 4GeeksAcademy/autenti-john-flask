import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const LogoutButton = () => {

	const { dispatch } = useGlobalReducer();
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		dispatch({ type: "logout" });
		navigate("/login");
	};

	return (
		<button className="btn btn-danger" onClick={handleLogout}>
			Salir
		</button>
	);
};

