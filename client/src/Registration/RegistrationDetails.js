import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const RegistrationDetails = () => {
  const location = useLocation();
  const [studentDetails,setStudentDetails] = useState(location.state.studentDetails);

  const register = ()=>{
    console.log('x');
    axios.post('http://localhost:8800/api/student/', studentDetails)
    .then((res)=>{
      console.log(res);
      
    })
    .catch((err)=>{console.log(err)});
  }

  const handleChange = (e)=>{
    setStudentDetails((studentDetails)=>{
      const name = e.target.name;
      const value = e.target.value;
      return name==='email'?{...studentDetails,email:value}:{...studentDetails,phone:value};
    })
  }

  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">

        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-2 md:p-4 items-center">

          <div className="px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Registration Form</h2>

            <form onSubmit={(e) => e.preventDefault()} action="" className="flex flex-shrink flex-col gap-2">
              <div className="flex flex-shrink flex-col gap-2 mt-4">
                <label htmlFor="name">Name</label>
                <input className="p-2 rounded-xl border" type="text" name="name" placeholder="Name" value={studentDetails.name} readOnly/>
              </div>

              <div className="flex flex-shrink flex-col gap-2 mt-4">
              <label htmlFor="fname">Father's Name</label>
                <input className="p-2 rounded-xl border" type="text" name="fname" placeholder="Father's name" value={studentDetails.fathersName} readOnly/>
              </div>
              

              <div className="flex flex-shrink flex-col gap-2 mt-4">
                <label htmlFor="aadhar">Aadhar Number</label>
                <input className="p-2 rounded-xl border" type="text" name="aadhar" placeholder="Aadhar Number" value={studentDetails.aadhaarId} readOnly/>
              </div>

              <div className="flex flex-shrink flex-col gap-2 mt-4">
              <label htmlFor="dob">Date of Birth</label>
                <input className="p-2 rounded-xl border" type="text" name="dob" placeholder="DOB" value={studentDetails.dob} readOnly/>
              </div>

              <div className="flex flex-shrink flex-col gap-2 mt-4">
              <label htmlFor="phone">Phone Number</label>
                <input className="p-2 rounded-xl border" type="number" name="phone" placeholder="Phone number" value={studentDetails.phone} onChange={handleChange}/>
              </div>

              <div className="flex flex-shrink flex-col gap-2 mt-4">
                <label htmlFor="email">Email address</label>
                <input className="p-2 rounded-xl border" type="email" name="email" placeholder="Email address" value={studentDetails.email} onChange={handleChange}/>
              </div>

              <button className="bg-[#002D74] rounded-xl text-white py-2 top-2 hover:scale-105 duration-300" onClick={register}>Register</button>
              
            </form>
            
          </div>
        </div>
      </section>
    </div>

  )
}

export default RegistrationDetails;