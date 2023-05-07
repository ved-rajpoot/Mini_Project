//npm i express nodemon mongoose
import express from "express" 
import mongoose from "mongoose"
//npm i dotenv
import dotenv from "dotenv"

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

app.listen(8800,()=>{
    connect();
    console.log("Connected to server"); 
});