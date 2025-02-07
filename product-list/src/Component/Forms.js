import { useState } from "react";
import './Forms.css'
const Forms = () => {
  const [user, setUser] = useState({
    username: "",
      email: "",
      mobile:"",
      password: "",
      confirmPassword: "",
  });
  const [error, setError] = useState({})
  const [flag, setFlag] = useState(false)
    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
      console.log(user);
      
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {}
    
    if (user.username === "") {
      newError.username = "Please enter username";
    } else if(user.username.length <=2 || user.username.length > 10){
      newError.username = "username must be between 2 and 10";
    }
    if (user.email === "") {
      newError.email = "Please enter Email";
    } else if (user.email.indexOf('@') <= 0) {
      newError.email = " '@' Invalid Email";
    } else if ((user.email.charAt(user.email.length - 4) != ".") & (user.email.charAt(user.email.length - 3) != ",")){
      newError.email = " ',' Invalid Email";
    }
    

    if (user.mobile === "") {
      newError.mobile = "Please enter Mobile";
    } else if (isNaN(user.mobile)) {
      newError.mobile = "Please enter 10 digit only number";
    }
      

    if (user.password === "") {
      newError.password = "Please enter Password";
    } else if (user.password.length <= 2 || user.password.length > 15) {
      newError.password = "Password must be 2-12 characters long";
    }


    if (user.confirmPassword === "") {
      newError.confirmPassword = "Please enter ConfirmPassword";
    }else if (user.password !== user.confirmPassword) {
      newError.password = "Password not match";
    }


    else {
      setFlag(true);
    }
  setError(newError)
  };
  return (
    <div className="container">
      <h1 style={{color:'green', textAlign:'center'}}>{flag ? <p>{user.username} You have Register Success</p> : ''} </h1>
    <div className="form-container">
       
    
      <form className="form" onSubmit={handleSubmit}>
       
        <div className="form-group">
          <input type="text" placeholder="Username" onChange={handleChange} value={user.username} name="username" autoComplete="off"/>
        </div>
        <span style={{color:"red"}}>{ error.username}</span>
        <div className="form-group">
          <input type="text" placeholder="Email" onChange={handleChange} value={user.email} name="email"/>
        </div>
        <span style={{color:"red"}}>{ error.email}</span>
        <div className="form-group">
          <input type="text" placeholder="MobileNumber" onChange={handleChange} value={user.mobile} name="mobile"/>
        </div>
        <span style={{color:"red"}}>{ error.mobile}</span>
        <div className="form-group">
          <input type="text" placeholder="Password" onChange={handleChange} value={user.password} name="password"/>
        </div>
        <span style={{color:"red"}}>{ error.password}</span>
        <div className="form-group">
          <input type="text" placeholder="Confirm Password" onChange={handleChange} value={user.confirmPassword} name="confirmPassword"/>
        </div>
        <span style={{color:"red"}}>{ error.confirmPassword}</span>
        <button type="submit"> Sign up </button>{" "}
      </form>
      </div>
      </div>
  );
};

export default Forms;
