import React, { useEffect, useRef } from 'react'

const UseReferance = () => {
    let nameRef = useRef();
    useEffect(() => {
        console.log((nameRef.current.innerHTML = "hello useRef"));
        console.log((nameRef.current.style.color = 'green'));
        console.log((nameRef.current.style.backgroundColor = 'black'));
        

    }, []);
    return (
        <div>
            <h1 ref={nameRef}></h1>
        </div>
    );
};

export default UseReferance;


// form handling

