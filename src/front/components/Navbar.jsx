import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { LogoutButton } from "./Logoutbuttom";

export const Navbar = () => {

	const { store } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				
				<Link to="/">
					<span className="navbar-brand h1 text-white">
						PRUEBA DE TOKEN
					</span>
				</Link>

				<div className="ms-auto">
					{store.token ? (
						<LogoutButton />
					) : (
						<Link to="/register">
							<button className="btn btn-primary">
								Registrate
							</button>
						</Link>
					)}
				</div>

			</div>
		</nav>
	);
};
