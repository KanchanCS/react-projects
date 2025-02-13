import React from 'react'
import { topPicks } from '../Data/Data'
function Ourfood() {
  return (
      <>
          <div className='w-[90%] mx-auto bg-[#f4f1f1]'>
              <h1 className='text-center text-[#fbc531] text-3xl font-bold py-5'>Our Food</h1>
              <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-6 gap-3'>
                  {
                      topPicks.map((meal) => (
                          <div className='flex justify-center flex-col items-center' key={meal.id}>
                              <div>
                                  <img src={meal.image} alt={meal.name} className='w-[250px] h-[200px] rounded-lg object-cover' />
                                  <div className='flex items-center justify-center flex-col'>
                                  <p>{ meal.name}</p>
                                  <p>{meal.price}</p>
                                  <button className='bg-black w-[100px] text-white rounded-md my-4 py-[10px] text-[15px] hover:text-[#fbc531] font-semibold'>Add to cart</button>
                                  </div>
                             </div>
                          </div>
                      ))
                  }
              </div>
          </div>
    </>
  )
}

export default Ourfood