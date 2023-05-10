import React, { useState } from "react";
import '../authentication/auth.css'
import axios from "axios"

const Login=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleLogIn=()=>{
        const body = { email, password };
        axios.post('http://localhost:3001/Books-Gallery/login', body)
        .then(rslt=>console.log(rslt))
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return(
       
            <div class="container">
                <form>
                    <p>Welcome</p>
                    <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} /><br />
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} /><br />
                    <input type="button" value="Sign in" onClick={()=>handleLogIn({email,password})} /><br />
                    
                </form>

                <div class="drops">
                    <div class="drop drop-1"></div>
                    <div class="drop drop-2"></div>
                    <div class="drop drop-3"></div>
                    <div class="drop drop-4"></div>
                    <div class="drop drop-5"></div>
                </div>
            </div>
       
    )
}