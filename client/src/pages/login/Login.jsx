import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import './login.css'
import axios from 'axios';

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();

    const { user, dispatch, isFetching } = useContext(Context); // we get access to dispatch and is fetching from our context

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});

        try {
            const res = await axios.post('/auth/login',{
                username: userRef.current.value,
                password: passwordRef.current.value
            });
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});

        } catch (err){ 
            dispatch({type: "LOGIN_FAILURE"});
        }
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
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button> 
            </form>
                    <Link class="link" to="/register">
                        <button className="loginRegisterButton">Register</button>
                    </Link>
                
        </div>
    )
}
