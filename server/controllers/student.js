import { createError } from "../error"
import Student from "../models/Student"
export const addStudent = async (req, res, next)=>{
    const newStudent = new Student({userId:req.user.id, ...req.body})
    try{
        const savedStudent = await newStudent.save()
        res.status(200).json(savedStudent)
    }catch(err){
        next(err)
    }
}