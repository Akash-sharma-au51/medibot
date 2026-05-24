import express from "express";

import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectDb.js";
import morgan from "morgan";

const app = express();


dotenv.config();

//middlewares

const corsOption = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOption));
app.use(express.json())
app.use(morgan("dev"));


//routes

app.get("/",(req,res)=>{
  res.send("Welcome to MediBot API")
})


//connect to database
connectDB().then(() => {
  console.log("Connected to database"); 

    //start the server
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
  console.error("Failed to connect to database", error);
});
