import styles from "./logging.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";//Se usa para manejar el estado del usuario, contraseña y errores.
import miImagen from "../../assets/laQuimica.jpg"



export default function Logging() {

  const [usuario, setUsuario] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
  
  return (
    <div>
    <h2>Login</h2>
    {error && <p style={{ color: "red" }}>{error}</p>}
    <form className={styles.login}>
      <img 
      src={miImagen} 
     className={styles.laQuimica}
      alt="" />
      <input
        type="text"
        className={styles.controls}
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="password"
        className={styles.controls}
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button 
        type="submit"
        className={styles.button}
        >Ingresar
      </button>
    </form>
  </div>
  );
}
