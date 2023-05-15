import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
    aadhaarId:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    fathersName: {
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    present:{
        type: [String],
        default: "false",
    }
})

export default mongoose.model("Student", StudentSchema)