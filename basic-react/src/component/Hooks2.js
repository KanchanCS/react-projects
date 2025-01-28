import React from 'react'
import { useState } from 'react'

function Hooks() {
  // const num = [1,2,3,4]
  //   const [number, setNumber] = useState(num);
    
  const [data, setData] = useState({name:'xyz',age:25});
      function name1(){
       setData({...data,name:"kanchan"})
      }

    // function addNum() {
    //   setNumber([...number,5,6,7])
    // }
    
  return (
    <div>   
      {/* <p>Number: {number}</p> */}

      <p>my name is {data.name} and my age { data.age}</p>
      <button onClick={name1}>Add</button><br/>
    </div>
  )
}
export default Hooks





