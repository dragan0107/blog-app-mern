import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import './login.css'

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();

    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"})
    }

    return (
        <div className="login">
        <span className="loginTitle">Log In</span>
            <form action="" className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter your username " className="loginInput" autoFocus="true"
                    ref={userRef}
                />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your password." className="loginInput"
                    ref={passwordRef}
                />
                <button className="loginButton" type="submit">Login</button>
            </form>
                    <Link class="link" to="/register">
                        <button className="loginRegisterButton">Register</button>
                    </Link>
                
        </div>
    )
}
