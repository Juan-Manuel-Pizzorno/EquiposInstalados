const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Servidor corriendo correctamente!");
});

// Ruta de login (simulación de autenticación)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "service@laqq.com.ar" && password === "laqq123456") {
    return res.status(200).json({ message: "Login exitoso" });
  }

  return res.status(401).json({ message: "Credenciales incorrectas" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
