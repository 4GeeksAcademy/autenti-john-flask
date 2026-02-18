import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {

	return (
		<div className="bg-secondary bg-opacity-25 min-vh-100 d-flex justify-content-center align-items-center">

			<div className="bg-white p-5 rounded shadow text-center" style={{ maxWidth: "500px" }}>
				
				<h4 className="mb-3">
					Por favor registrate por el botón colocado en la Barra de Navegación.
				</h4>

				<p className="mb-4">
					Sino, presiona aquí para registrarte:
				</p>

				<Link to="/register" className="btn btn-primary">
					Registrate
				</Link>
			</div>
		</div>
	);
};
