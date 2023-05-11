
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../SignUp/Signup.css';
import { useNavigate } from "react-router-dom"


const Signup = () => {
    const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogIn = () => {
  //   const body = { email, password };
  //   axios.post('http://localhost:3001/Books-Gallery/user/login', body)
  //     .then(rslt => console.log(rslt));
  // };
  const handleLogIn = () => {
    const body = { email, password };
    axios.post('http://localhost:3001/Books-Gallery/user/login', body)
      .then(resp => {
        if (resp.status === 200) {

        navigate ('/home'); 
      } 
      else {

        console.log(resp);
      }
    });
  };
 
  
  const handlesignup = () => { 
    if (name === "" || email === "" || password === "") {
    alert("Please fill all the fields!");
  } else {
    const body = { name, email, password };
    axios.post('http://localhost:3001/Books-Gallery/user/signup', body, {
      headers: { "Content-Type": "application/json" },
    })
      .then(rslt => {
        console.log(rslt);
      })
      .catch((err) => console.log(err));
   }
    
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }, []);

  return (
    <div className="body">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <button onClick={handlesignup}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign In</h1>
            <span>Use your account</span>
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <button onClick={()=>{handleLogIn();navigate('/home')}}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend</h1>
              <p>Enter your personal details and start the journey with us</p>
              <button className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

