import React from 'react'

function AboutUs() {
  return (
    <>
      <div className='text-[gray] body-font w-[80%] mx-auto'>
        <div className='px-[16px]'>
        <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-8'>Driving the force of <span className='text-[#fbc531]'>assortment</span></h2>
        <p className='mb-8 leading-relaxed text-[20px]'>Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Repudiandae praesentium quidem, ipsum nostrum adipisci animi.
          Odit minus nulla recusandae neque non. Harum culpa vitae dolore
          , fuga tempora commodi sapiente expedita!</p>
        </div>


        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center '>
            <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>Who are we</h2>
            <p className='mb-8 leading-relaxed'>
              Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Cumque laboriosam architecto, quasi, molestias
              officia rerum dicta enim porro blanditiis tenetur soluta,
              minima commodi? Voluptas velit corrupti dolorem quas veritatis
              saepe fuga culpa ratione sit ut possimus temporibus distinctio
              molestias doloremque voluptatibus inventore rerum magnam,
              ab reiciendis adipisci eveniet ullam blanditiis.
              Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Cumque laboriosam architecto, quasi, molestias
              officia rerum dicta enim porro blanditiis tenetur soluta,
              minima commodi? Voluptas velit corrupti dolorem quas veritatis
              saepe fuga culpa ratione sit ut possimus temporibus distinctio
              molestias doloremque voluptatibus inventore rerum magnam,
              ab reiciendis adipisci eveniet ullam blanditiis.
            </p>
            </div>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
              <img src="https://careers.swiggy.com/assets/img/img1.jpg" alt="" className='object-cover object-center rounded'/>
            </div>
          </div>
      
      </div>
    </>
  )
}

export default AboutUs