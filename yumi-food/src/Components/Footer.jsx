import React from 'react'

function Footer() {
  return (
      <>
       <div className='w-full bg-black text-[#9e9a9a] flex justify-around py-5 '>
              
              <div>
              <h1 className='font-bold mb-3 text-[18px] text-white'>Yumi<span className="text-[#e4a526]">Food</span></h1>
              <p>@2025</p>
          </div>
          <div>
              <h1 className='font-bold mb-3 text-[18px] text-white'>Company</h1>
              <p>About</p>
              <p>Career</p>
              <p>Team</p>
              <p>About</p>
          </div>
          <div>
              <p className='font-bold mb-3 text-[18px] text-white'>Help & Support</p>
              <p>Company</p>
              <p>Partener with Us</p>
              <p>Ride with Us</p>
          </div>
          <div>
              <p className='font-bold mb-3 text-[18px] text-white'>We deliver</p>
              <p>Banglore</p>
              <p>Noida</p>
              <p>Delhi</p>
              <p>Pune</p>
          </div>
          </div>
      </>
  )
}

export default Footer