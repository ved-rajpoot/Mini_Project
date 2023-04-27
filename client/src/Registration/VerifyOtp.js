import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const VerifyOtp = () => {

  const [aadhaarNumber,setAadhaarNumber] = useState(null);
  const [client_id, setClient_id] = useState(null);
  const [OTP, setOTP] = useState(null);


  const getOtp = ()=>{
    axios.post("https://api.emptra.com/aadhaarVerification/requestOtp", {aadhaarNumber},{
      headers:{
        'secretKey': 'xBDrtOSlPGiAfZabVFPJG2RsvhydbyUgYnxJTSKmclK1Fb9HD62Qb1qnynQM4uBPh',
        'ClientId' : '3e72a6db51ab5e616ff79c6e3134c4ac:294564a77a92fef8fbfc28284c1b6ccd'
      }
    })
    .then((res)=>{
      // console.log(res);
      setClient_id(res.data.result.data.client_id);

    })
    .catch(err=>console.log(err));
  }

  const verifyOtp = ()=>{
    axios.post("https://api.emptra.com/aadhaarVerification/submitOtp",{OTP, client_id},{
      headers:{
        'secretKey': 'xBDrtOSlPGiAfZabVFPJG2RsvhydbyUgYnxJTSKmclK1Fb9HD62Qb1qnynQM4uBPh',
        'ClientId' : '3e72a6db51ab5e616ff79c6e3134c4ac:294564a77a92fef8fbfc28284c1b6ccd'
      }
    })
    .then((res)=>{
        console.log(res);
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
              <input className="p-2 mt-4 rounded-xl border" type="text" name="name" placeholder="Enter aadhar number" value={aadhaarNumber} onChange={(e)=>{setAadhaarNumber(e.target.value)}}/>
              <button className="bg-[#002D74] rounded-xl text-white py-2 top-2 hover:scale-105 duration-300" onClick={getOtp}>Get OTP</button>
              <input className="p-2 mt-4 rounded-xl border" type="text" name="name" placeholder="Enter aadhar number" value={OTP} onChange={(e)=>{setOTP(e.target.value)}}/>
              <button className="bg-[#002D74] rounded-xl text-white py-2 top-2 hover:scale-105 duration-300" onClick={verifyOtp}>Verify OTP</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VerifyOtp;