import express from "express"
import { addStudent, markAttendence, getPresent, resetAttendence, getAbsent } from "../controllers/student.js"
const router = express.Router()

//create student
router.post("/", addStudent)

//mark a student present
router.put("/", markAttendence)

//get all who are absent
router.get("/absent", getAbsent)

//reset attendence
router.put("/reset", resetAttendence)

//get all who are present
router.get("/present", getPresent)

export default router