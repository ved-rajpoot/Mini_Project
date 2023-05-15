import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const VerifyOtp = () => {
  const navigate = useNavigate();

  const [aadhaarNumber,setAadhaarNumber] = useState(null);
  const [client_id, setClient_id] = useState(null);
  const [OTP, setOTP] = useState(null);
  const [aadhaarDetails, setAadhaarDetails] = useState(null);

  const getOtp = ()=>{
    axios.post("https://api.emptra.com/aadhaarVerification/requestOtp", {aadhaarNumber},{
      headers:{
        'secretKey': 'b9zYKHjrP9ieueWUjtSCtpi0nIlEckO6Vl1OOXC7SPNkitilRTfYivOhg7OMNcRp',
        'ClientId' : '800e1ef152e95de4c1f8532ae46b5868:5b96c64e84f68712cbd9f832943f3208'
      }
    })
    .then((res)=>{
      console.log(res);
      // setClient_id(res.data.result.data.client_id);

    })
    .catch(err=>console.log(err));
  }

  const submitOtp = ()=>{
    axios.post("https://api.emptra.com/aadhaarVerification/submitOtp",{OTP, client_id},{
      headers:{
        'secretKey': 'b9zYKHjrP9ieueWUjtSCtpi0nIlEckO6Vl1OOXC7SPNkitilRTfYivOhg7OMNcRp7',
        'ClientId' : 'b9zYKHjrP9ieueWUjtSCtpi0nIlEckO6Vl1OOXC7SPNkitilRTfYivOhg7OMNcRp7'
      }
    })
    .then((res)=>{
        // one check needs to be implemented weather thee OTP is correct or not.
        console.log(res);
        setAadhaarDetails(res);
        navigate('/registration/enterdetails');
    })
    .catch(err=>console.log(err));
  }

  return (

    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">

        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-2 md:p-4 items-center">

          <div className="px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>

            <form onSubmit={(e) => e.preventDefault()} action="" className="flex flex-shrink flex-col gap-2">
              <div className="flex flex-shrink flex-col gap-2">
                <input className="p-2 mt-4 rounded-xl border" type="text" name="name" placeholder="Enter aadhaar number" value={aadhaarNumber} onChange={(e)=>  {setAadhaarNumber(e.target.value)}}/>
                <button className="bg-[#002D74] rounded-xl text-white py-2 top-2 hover:scale-105 duration-300" onClick={getOtp}>Get OTP</button>
                <p class="pl-3 text-sm text-green-600 dark:text-green-500"><span class="font-medium">OTP sent!</span></p>
              </div>

              <div className="flex flex-shrink flex-col gap-2">
                <input className="p-2 mt-4 rounded-xl border" type="text" name="name" placeholder="Enter OTP" value={OTP} onChange={(e)=>{setOTP(e.target.value)}}/>
                <button className="bg-[#002D74] rounded-xl text-white py-2 top-2 hover:scale-105 duration-300" onClick={submitOtp}>Verify OTP</button>
              </div>
            </form>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default VerifyOtp;