//npm i express nodemon mongoose
import express from "express" 
import mongoose from "mongoose"
//npm i dotenv
import dotenv from "dotenv"
import cors from 'cors';
import studentRoutes from "./routes/students.js"

const app = express()
dotenv.config();

//Connection to MongoDb Database using mongoose
const connect = ()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to db")
    }).catch((err)=>{
        throw err;
    });
};

//ALLOW ANY JSON FILE FROM OUTSIDE FOR TESTING PURPOSE
app.use(express.json())
app.use(cors());
//MIDDLEWARE TO HANDLE ERRORS
app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Error thrown!"
    return res.status(status).json({
        success: false,
        status: status,
        message: message
    })
})

app.use("/api/student", studentRoutes)

app.listen(8800,()=>{
    connect();
    console.log("Connected to server"); 
});