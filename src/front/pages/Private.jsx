import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutButton } from "../components/Logoutbuttom";

export const Private= () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/register");
            return;
        }

        const checkPrivate = async () => {

            const backendUrl = import.meta.env.VITE_BACKEND_URL;

            const response = await fetch(`${backendUrl}/private`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (!response.ok) {
                localStorage.removeItem("token");
                navigate("/register");
                return;
            }

            const data = await response.json();
            setUser(data.logged_in_as);
        };

        checkPrivate();

    }, []);

    return (
        <div className="bg-secondary bg-opacity-25 min-vh-100 d-flex justify-content-center align-items-center">

            <div className="bg-white p-5 rounded shadow text-center" style={{ maxWidth: "500px" }}>
                
                {user ? (
                    <>
                        <h3 className="mb-3">Felicidades</h3>
                        <p>
                            Puedes ver esto porque te registraste y tienes un Token.
                        </p>
                        <p className="text-muted">
                            Logueado como: {user}
                        </p>
                        <LogoutButton />
                    </>
                ) : (
                    <p>Verificando acceso...</p>
                )}

            </div>

        </div>
    );
};
