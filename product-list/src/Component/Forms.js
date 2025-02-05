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
    
    const handleChange = (e) => {
        
    }
  return (
    <div className="form-container">
      <div className="logo">
        <img
          src="#"
          alt="#"
          style={{
            width: "200px",
          }}
        />{" "}
      </div>
      <form className="form">
        <div className="form-group">
          <input type="text" placeholder="Username" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Email" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="MobileNumber" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Password" onChange={handleChange}/>
              </div>
              <div className="form-group">
          <input type="text" placeholder="Confirm Password" onChange={handleChange}/>
        </div>
        <button type="submit"> Sign up </button>{" "}
      </form>
    </div>
  );
};

export default Forms;
