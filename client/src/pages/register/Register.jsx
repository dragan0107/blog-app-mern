import { Link } from 'react-router-dom'
import './register.css'

export default function register() {
    return (
        <div className="register">
        <span className="registerTitle">Register</span>
            <form action="" className="registerForm">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter your username." className="registerInput" autoFocus="true"/>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter your email." className="registerInput"/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your password." className="registerInput"/>
                <button className="registerButton">
                    <Link class="link" to="/register">Register</Link>
                </button>
            </form>
            <button className="registerLoginButton">
                    <Link class="link" to="/login">Log in</Link>
            </button>
        </div>
    )
}
