import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}