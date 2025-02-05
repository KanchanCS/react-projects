import React, { useState } from 'react'

function RegexFormVakidation() {
    const [formData,setFormData]=useState({
        email:'',
        phone:'',
        password:''
    })
    const [errors,setErrors]=useState({
        email:'',
        phone:'',
        password:''
    })

    //regex pattern
    const emailRegex=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
    const phoneRegex=/^[0-9]{10}$/;
    const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    //const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    const handlechange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,[name]:value
        })

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        let formerrors={...errors}

        //Email
        if(!emailRegex.test(formData.email)){
            formerrors.email='email should be in this format:"abc01@gmail.com"'

        }else{
            formerrors.email=''
        }

        //phone validation
        if(!phoneRegex.test(formData.phone)){
            formerrors.phone='Number must be in 10 digits'
        }else{
            formerrors.phone=''
        }

        //password validation
        if(!passwordRegex.test(formData.password)){
            formerrors.password='Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.'
        }
        else{
            formerrors.password=''
        }
        setErrors(formerrors)
        if(!formerrors.email && !formerrors.phone && !formerrors.password){
            alert('form submitted')
            console.log('form submitted',formData)
          
        }
        setFormData({
            email:'',
            phone:'',
            password:''
        })

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Email</label>
            <input 
            type='email'
            name='email'
            value={formData.email}
            onChange={handlechange}
             />
             {errors.email && <div style={{color:'red'}}>{errors.email}</div>}
        </div>
        <div>
            <label>Phone:</label>
            <input 
            type='text'
            name='phone'
            value={formData.phone}
            onChange={handlechange}
             />
{errors.phone && <div style={{color:'red'}}>{errors.phone}</div>}

        </div>
        <div>
            <label>Password:</label>
            <input 
            type='password'
            name='password'
            value={formData.password}
            onChange={handlechange}
             />
             {errors.password && <div style={{color:'red'}}>{errors.password}</div>}
        </div>
        <button type='submit'>Submit</button>



      </form>
    </div>
  )
}

export default RegexFormVakidation