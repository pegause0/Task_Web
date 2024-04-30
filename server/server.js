import express from "express";
import cors from "cors"; // Import the cors middleware

import app from "./app.js";
import cloadinary from 'cloudinary'

cloadinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
})

const PORT = process.env.PORT || 4000; // Set a default port if PORT is not defined in environment variables

const server = express();

server.use(cors({
  origin: 'http://localhost:3000', // Replace with the actual URL of your frontend application
  credentials: true // Allow credentials (cookies) to be sent with the request
}));

server.use(app);

server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
