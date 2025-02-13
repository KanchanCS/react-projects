import React from 'react'

function SignIn() {
  return (
    <div>
         <div className='w-[80%] mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
              <img src="https://careers.swiggy.com/assets/img/img1.jpg" alt="" className='object-cover object-center rounded-3xl'/>
            </div>
        <div className=' lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
        <h2 className='text-3xl font-bold text-gray-900'>Sign In</h2>
          <div className='relative mb-4'>
            <label htmlFor="full-name" className='leading-7 text-sm'>Full Name</label>
            <input type="text" id='full-name' name='full-name' className='w-full bg-white rounde border border-gray-300 focus:border-indigo-500 focus:ring-2 focus-within:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duraction-200 ease-in-out' />
            
            <label htmlFor="email" className='leading-7 text-sm'>Email</label>
            <input type="email" id='email' name='email' className='w-full bg-white rounde border border-gray-300 focus:border-indigo-500 focus:ring-2 focus-within:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duraction-200 ease-in-out' />
            
            <label htmlFor="mobile" className='leading-7 text-sm'>Mobile</label>
            <input type="mobile" id='mobile' name='mobile' className='w-full bg-white rounde border border-gray-300 focus:border-indigo-500 focus:ring-2 focus-within:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duraction-200 ease-in-out' />
            
            <label htmlFor="password" className='leading-7 text-sm'>Password</label>
            <input type="password" id='password' name='password' className='w-full bg-white rounde border border-gray-300 focus:border-indigo-500 focus:ring-2 focus-within:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duraction-200 ease-in-out' />
          </div>
              
          <button className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Sign Up</button>

            </div>
          </div>
    </div>
  )
}

export default SignIn