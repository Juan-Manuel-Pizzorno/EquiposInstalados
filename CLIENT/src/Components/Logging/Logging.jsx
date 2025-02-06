import styles from "./logging.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import miImagen from "../../assets/laQuimica.jpg";
import axios from "axios";  // Asegúrate de instalar axios

export default function Logging() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que el formulario se recargue.
    await new Promise((resolve) => setTimeout(resolve, 500)); 
  
    const usuarioValido = "service@laqq.com.ar";
    const passwordValida = "laqq123456";
  
    if (usuario !== usuarioValido) {
      setError("⚠ Usuario inválido");
    } else if (password !== passwordValida) {
      setError("⚠ Contraseña incorrecta");
    } else {
      setError(""); // Borra los errores previos.
      alert("✅ Inicio de sesión exitoso"); 
  
      // Guarda el estado de autenticación
      localStorage.setItem("isAuthenticated", "true");
  
      // 🚀 Asegura la redirección después de guardar el estado
      navigate("/dashboard");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.login} onSubmit={handleSubmit} autoComplete="on">
        <img src={miImagen} className={styles.laQuimica} alt="Logo" />

        <input
          type="text"
          name="username"
          className={styles.controls}
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          autoComplete="username"
        />

        <input
          type="password"
          name="password"
          className={styles.controls}
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <button type="submit" className={styles.button}>Ingresar</button>
      </form>
    </div>
  );
}
