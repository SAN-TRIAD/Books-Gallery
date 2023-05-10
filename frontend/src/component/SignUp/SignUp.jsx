import React, { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const Signup=()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [passwordValidator,setPasswordValidator]=useState('')

    // const navigate = useNavigate();

    const handlesignup=()=>{
        if (password !== passwordValidator) {
            return alert("passwords don't match");
          }
        const body = {name, email, password,passwordValidator };
        axios.post('http://localhost:3001/user/signup', body, {
            headers: { "Content-Type": "application/json" },
          })
        .then(rslt=>{console.log(rslt);
            alert("Welcome to our Gallery");
            // navigate('/login');
        })
        
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

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

    return(
        <div>
            <div class="container">
                <form>
                    <p>Welcome</p>
                    <input type="text" placeholder="Name" value={name} onChange={handleNameChange} /><br />
                    <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} /><br />
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} /><br />
                    <label>Confirm Password </label>
                    <input type="password" placeholder="PasswordValidator" value={passwordValidator} onChange={handlePasswordValChange} /><br />
                    <input type="button" value="Sign up" onClick={handlesignup} /><br />
                    <a href="#">Forgot Password?</a>
                    <div>
                       <Link to={`/login`}> signin</Link>
                    </div>
                </form>

                <div class="drops">
                    <div class="drop drop-1"></div>
                    <div class="drop drop-2"></div>
                    <div class="drop drop-3"></div>
                    <div class="drop drop-4"></div>
                    <div class="drop drop-5"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;