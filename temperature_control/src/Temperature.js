import React, {useState} from 'react'
import './Temperature.css'
// import mobile from './img/mobile.avif'
const TemperatureControl = () => {
    const [temp, settemp] = useState(12);
    const [color, setColor] = useState("#34495e")

    function handlePlus() {
        settemp(temp + 1);
        if(temp === 18) { 
            setColor("red");
        }
    }
    const handleMinus = () => {
        settemp(temp - 1);
        if (temp <= 19) {
            setColor("#34495e");
        }
    }

    return (
        <div className="temperature">
            {/* <div className='temp-img'>
             <img src={mobile} alt='img' style={{width:'100%'}}/> 
            </div> */}
            <div className='temp-display'>
                <div className='actual-temp' style={{backgroundColor:color}}>{temp }°C</div>
                <div className='temp-btn'>
                    <button onClick={handlePlus}>+</button>
                    <button onClick={handleMinus}>-</button>
                </div>
            </div>
        </div>
    )
}

export default TemperatureControl;