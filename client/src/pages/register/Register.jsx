import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post('/auth/register', {
            username: username,
            email: email,
            password: password
        });
        res.data && window.location.replace('/login'); // redirect to login page after registering
    } catch(err) {
        setError(true);
    }
    }


    return (
        <div className="register">
        <span className="registerTitle">Register</span>
            <form action="" className="registerForm" onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter your username." className="registerInput" autoFocus="true"
                    onChange={(e)=> setUsername(e.target.value)} required
                />
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter your email." className="registerInput"
                    onChange={(e)=> setEmail(e.target.value)} required
                />
                <label htmlFor="">Password</label>
                <input type="password" minlength="6" required placeholder="Enter your password." className="registerInput"
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <button className="registerButton">
                    <Link class="link" to="/register"></Link>
                    Register
                </button>
            </form>
            <Link class="link" to="/login"><button className="registerLoginButton">Log in</button></Link>
            
            {error===true && <span className="errorNot">Something went wrong...</span>}
        </div>
    )
}
