import React, { useEffect, useState } from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
function Hero() {
    const imageData = [
        {
            url: "https://media.istockphoto.com/id/1271386167/photo/coffee.jpg?s=612x612&w=0&k=20&c=5gWShBS-lSa_ycm1_olcm9wric7dKYNMMm8Q780-A74="
        },
        {
            url: "https://content.jdmagicbox.com/comp/south_24_parganas/n1/9999p3210.3210.151103162423.m2n1/catalogue/sardar-fast-food-centre-sangrampur-hat-south-24-parganas-fast-food-vc8sa.jpg"
        },
        {
            url: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
        },
    ];
    const [slider, setSlider] = useState(2);

    const handleMinus = () => {
        setSlider(slider === 0?imageData.length-1:slider-1);
    }
    const handlePlus = () => { 
        setSlider(slider === imageData.length - 1? 0:slider+1);
    }

    useEffect(() => {
        const sliderClear = setInterval(() => { 
            handlePlus();
            }, 2000)
        return() => clearInterval(sliderClear)
    })
  return (
      <div  className='m-[100px]'>
          <div className="w-[95%] mx-auto h-[60vh] bg-black my-5 opacity-80 rounded-2xl">
              {
                  imageData.map((item, i) => (
                      <div key={i} className={`${slider === i? "block":"hidden"}`}>
                          <img src={item.url} alt="hero-image" className='w-full h-[60vh] rounded-2xl object-cover' />
                          
                      </div>
                  ))
              }
            
              
          </div>
          <div className='flex cursor-pointer justify-between w-full px-9 absolute top-[40%] text-white'>
              <FaAngleLeft size={30} onClick={handleMinus}/>
              <FaAngleRight size={30} onClick={handlePlus}/>
          </div>
    </div>
  )
}

export default Hero

