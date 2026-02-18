import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const backendUrl = import.meta.env.VITE_BACKEND_URL;

        const response = await fetch(`${backendUrl}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (response.ok) {
            navigate("/login");
        } else {
            const data = await response.json();
            alert(data.msg);
        }
    };

    return (
        <div className="bg-secondary bg-opacity-25 min-vh-100 d-flex justify-content-center align-items-center">

            <div className="bg-white p-5 rounded shadow" style={{ width: "400px" }}>
                
                <h3 className="text-center mb-4">Registro</h3>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button className="btn btn-primary w-100">
                        Registrate
                    </button>

                </form>

            </div>

        </div>
    );
};
