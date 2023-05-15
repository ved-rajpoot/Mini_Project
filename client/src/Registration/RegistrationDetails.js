import React from 'react'

const RegistrationDetails = () => {
  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">

        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-2 md:p-4 items-center">

          <div className="px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Registration Form</h2>

            <form onSubmit={(e) => e.preventDefault()} action="" className="flex flex-shrink flex-col gap-2">
              <div className="flex flex-shrink flex-col gap-2 mt-4">
                <label htmlFor="name">Name</label>
                <input className="p-2 rounded-xl border" type="text" name="name" placeholder="Name" value='Pranjul Mishra' readOnly/>
              </div>

              <div className="flex flex-shrink flex-col gap-2 mt-4">
              <label htmlFor="fname">Father's Name</label>
                <input className="p-2 rounded-xl border" type="text" name="fname" placeholder="Father's name" value='Ajay Kumar Mishra' readOnly/>
              </div>
              
              <div className="flex flex-shrink flex-col gap-2 mt-4">
              <label htmlFor="phNum">Phone Number</label>
                <input className="p-2 rounded-xl border" type="text" name="phNum" placeholder="Phone number" value='9670042176' readOnly/>
              </div>

              <div className="flex flex-shrink flex-col gap-2 mt-4">
                <label htmlFor="Eadd">Email address</label>
                <input className="p-2 rounded-xl border" type="text" name="Eadd" placeholder="Email address" value='pranjulmishra1283@gmail.com'/>
              </div>

              <div className="flex flex-shrink flex-col gap-2 mt-4">
                <label htmlFor="aadhar">Aadhar Number</label>
                <input className="p-2 rounded-xl border" type="text" name="aadhar" placeholder="Aadhar Number" value='731188859531' readOnly/>
              </div>

              <div className="flex flex-shrink flex-col gap-2 mt-4">
              <label htmlFor="dob">Date of Birth</label>
                <input className="p-2 rounded-xl border" type="text" name="dob" placeholder="DOB" value='10-02-2001' readOnly/>
              </div>

              <button className="bg-[#002D74] rounded-xl text-white py-2 top-2 hover:scale-105 duration-300">Register</button>
              
            </form>
            
          </div>
        </div>
      </section>
    </div>

  )
}

export default RegistrationDetails