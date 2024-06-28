import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';
import './LoginForm.css';

const LoginForm = () => {
  const [loginData, setData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      });
      console.log(res);
      if (res.ok) {
        const responseData = await res.json();
     
        login(responseData.token);
         const userId = responseData.data._id;
        const token = responseData.token;

        localStorage.setItem('userId', userId);
        localStorage.setItem('token',token)
        
        login(token);
        setData({ email: "", password: "" });
        navigate('/');
        console.log(responseData);
      } else {
  
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="login-section" >
    <div className='login'>
      <div className="main">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='input-text'>
            <div className='input'>
              <label htmlFor="first">Email</label>
              <input type="text" name='email' value={loginData.email} placeholder="Enter Email" onChange={handleInput} style={{ textDecoration: "green", color: "black", width: "18rem", marginLeft: "3rem" }} />
            </div>
            <div className='input'>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={loginData.password} placeholder="Enter Password" onChange={handleInput} style={{ textDecoration: "green", color: "black", width: "18rem" }} />
            </div>
          </div>
          <div className="wrap">
            <button type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="forget-section" style={{ textDecoration: "green" }}>
          <Link to="/Forget" style={{ color: "black" }}>forgot password ?</Link>
          <Link to="/Register" style={{ color: "black" }}>create an account</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
