import express from "express";
import env from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/database.js";

//rotue imports
import loginRoutes from "./src/routes/login.routes.js";

// config
env.config();

// Intialization
const app = express();
const port = process.env.PORT || 3000;

//express middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database Connection
connectDB();

//routes
app.use("/user/login", loginRoutes);

app.listen(port, () => console.log(`server running:http://localhost:${port}`));
