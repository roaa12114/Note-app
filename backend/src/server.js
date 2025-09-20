import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "../src/routes/notesRoute.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

//const express = require("express");

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5001



// middleware

app.use(cors({
    origin: "http://localhost:5173", // مكان الـ frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json()); //This middleware will parse JSON bodies: req.body
app.use(rateLimiter);
// our simple custom middleware
//app.use((req, res, next)=> {
//    console.log(`Req methos is ${req.method} & Req URL is ${req.url}`);
//})
 
app.use("/api/notes", notesRoutes);

connectDB().then( () => {
    app.listen(PORT, () => {
    console.log("Server start at PORT:",PORT);
});

});


