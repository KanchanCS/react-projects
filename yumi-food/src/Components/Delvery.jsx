import React from 'react'

function Delvery() {
  return (
      <div>
        <div className='w-full py-10 px-4 '>
              <h3 className='text-[#fbc531] font-bold text-2xl text-center'>Quick Delivery App</h3>
        
          <div className='grid grid-cols-2 w-[90%] mx-auto my-10 gap-10 '>
                  <img src="https://waayu.app/public/landing/img/demos/app-landing/original_img/Realistic_Silver_Smartphone_Mockup_05%201.png" alt="" className='w-[750px]' />
                  <div className='flex flex-col justify-center'>
                      <p className='font-bold text-[green] text-[30px]'>Get The App</p>
                      <h2 className='lg:text-5xl md:text-3xl sm:text-2xl py-2 font-bold'>The Fastest Food Delivery In India</h2>
                      <button className='bg-black md:w-[150px] sm:w-[100px] text-white rounded-md my-6 py-[15px] md:text-[20px] sm:text-[10px] hover:text-[#fbc531] font-semibold'>Get Started</button>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Delvery