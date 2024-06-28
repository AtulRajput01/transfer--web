import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';


function Register(){
  const [formData, setUser] = useState({
    Name: '',
    email: '',
    phoneNumber: '',
    state: '',
    password: '',
    confirmPassword: ''
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...formData,
      [name]: value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.password !== formData.confirmPassword) {
     
      return; 
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("response data : ", response);

      if (response.ok) {
        const responseData = await response.json();
      
        setUser({ Name: "", email: "", phoneNumber: "", state: "" ,password: "",confirmPassword: ""});
        console.log(responseData);
      } else {
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div>
      <div className="register-container">
        <div className="register-card">
          <form className="form" onSubmit={handleSubmit}>
            <p className="title">Register</p>
            <p className="message">Signup now and get full access to our app.</p>
            <div className="flex">
              <label>
                <input className="input" type="text" name="Name" value={formData.Name} onChange={handleInput} placeholder="" required />
                <span>Name</span>
              </label>
              <label>
                <input className="input" type="text" name="email" value={formData.email} onChange={handleInput} placeholder="" required />
                <span>Email</span>
              </label>
            </div>
            <div className="flex">
              <label>
                <input className="input" type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleInput} placeholder="" required />
                <span>Phone Number</span>
              </label>
              <label>
                <input className="input" type="text" name="state" value={formData.state} onChange={handleInput} placeholder="" required />
                <span>State</span>
              </label>
            </div>
            <div className="flex">
              <label>
                <input className="input" type="password" name="password" value={formData.password} onChange={handleInput} placeholder="" required />
                <span>Password</span>
              </label>
              <label>
                <input className="input" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInput} placeholder="" required />
                <span>Confirm Password</span>
              </label>
            </div>
            <button type="submit" className="register-submit">Submit</button>
            <p className="signin">Already have an account ? <Link to="/login"> Sign in</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Register;
