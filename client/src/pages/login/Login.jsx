import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    return (
        <div className="login">
        <span className="loginTitle">Log In</span>
            <form action="" className="loginForm">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter your email." className="loginInput" autoFocus="true"/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your password." className="loginInput"/>
                <button className="loginButton">Login</button>
            </form>
                <button className="loginRegisterButton">
                    <Link class="link" to="/register">Register</Link>
                </button>
        </div>
    )
}
