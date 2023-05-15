// import { createError } from "../error.js"
import Student from "../models/Student.js"
export const addStudent = async (req, res, next)=>{
    const newStudent = new Student({
        aadhaarId: req.body.aadhaarId,
        name: req.body.name,
        fathersName: req.body.fathersName,
        dob: req.body.dob,
        gender: req.body.gender,
        phone: req.body.phone,
        email: req.body.email,
    })
    try{
        const savedStudent = await newStudent.save()
        console.log(savedStudent);
        res.status(200).json(savedStudent)
    }catch(err){
        next(err)
    }
}

export const markAttendence = async (req, res, next)=>{
    try {
        const student = await Student.findOneAndUpdate(
            {aadhaarId: req.body.aadhaarId},
            {present: "true"},
            {new: true}
        );
        res.status(200).json(student);
    } catch(err) {
        next(err);
    }
}

export const resetAttendence = async (req, res, next)=>{
    try {
        const filter = { present: "true"};
        const updateAtttendence = {
            $set: {
                present: `false`,
            },
        };
        const result = await Student.updateMany(filter, updateAtttendence);
        res.status(200).json(result);
    } catch(err) {
        next(err);
    }
}

export const getPresent = async (req, res, next)=>{
    try {
        const filter = { present: "true"};
        const result = await Student.find(filter);
        res.status(200).json(result);
    } catch(err) {
        next(err);
    }
}

export const getAbsent = async (req, res, next)=>{
    try {
        const filter = { present: "false"};
        const result = await Student.find(filter);
        res.status(200).json(result);
    } catch(err) {
        next(err);
    }
}