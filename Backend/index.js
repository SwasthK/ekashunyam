import express from "express";
import env from "dotenv";
import connectDB from "./config/database.js";

// config
env.config();

// Intialization
const app = express();
const port = process.env.PORT || 3000;

//Database Connection
connectDB();

app.listen(port, () => console.log(`server running:http://localhost:${port}`));
