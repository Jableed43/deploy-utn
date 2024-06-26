import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import categoryRoute from "./routes/categoryRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a la base de datos
connectDB();

// Rutas de la aplicación
//ruta base
app.get("/", (req, res) => {
  res.send("home");
});

//rutas de usuario
app.use("/api/user", userRoute);

//rutas de producto
app.use("/api/product", productRoute);

//rutas de categorias
app.use("/api/category", categoryRoute);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
