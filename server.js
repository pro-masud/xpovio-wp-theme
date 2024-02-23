import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import multer from "multer";
import index from "./router/index.js";

// init dotenv config
dotenv.config();

// init express 
const app = express();

// public directory static now
app.use(express.static("public"));

// get Port number here
const PORT = process.env.PORT;

// json encodead
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// init all router 
app.use(index);


// create server within express js
app.listen(PORT, () => {
    console.log(`Server Runing Is Port Number ${PORT}`.bgGreen.black);
});