import express from "express";
import env from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/database.js";

//rotue imports
import registerRoute from "./src/routes/register.routes.js";
import loginRoute from "./src/routes/login.routes.js";
import verifyTokenRoute from "./src/routes/verifyToken.routes.js";

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
app.use("/api/user/register", registerRoute);
app.use("/api/user/login", loginRoute);
app.use("/api/user/verify", verifyTokenRoute);

app.listen(port, () => console.log(`server running:http://localhost:${port}`));
