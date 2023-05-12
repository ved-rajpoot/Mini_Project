import express from "express"
import { addStudent, markAttendence, getStudents } from "../controllers/student.js"
const router = express.Router()

//create student
router.post("/", addStudent)

router.put("/:id", markAttendence)

router.get("/all", getStudents)

export default router