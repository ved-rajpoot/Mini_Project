//import { createError } from "../error"
import Student from "../models/Student.js"
export const addStudent = async (req, res, next)=>{
    const newStudent = new Student()
    try{
        const savedStudent = await newStudent.save()
        res.status(200).json(savedStudent)
    }catch(err){
        next(err)
    }
}

export const markAttendence = async (req, res, next)=>{
}

export const getStudents = async (req, res, next)=>{
}