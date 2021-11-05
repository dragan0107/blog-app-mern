import React from 'react'
import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-instagram"></i>
        <i className="topIcon fab fa-pinterest"></i>
        <i className="topIcon fab fa-twitter"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">Home</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">About</Link>
          </li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">
            <Link className="link" to="/write">Write</Link>
          </li>
          <li className="topListItem">
            {user && "Log Out"}
          </li>
        </ul>
      </div>
      <div className="topRight">
      {
        user ? (<img className="topImg" src="https://static-cdn.jtvnw.net/jtv_user_pictures/1d5e6a4e-c7e1-4009-8a54-b7d9125d17a9-profile_image-70x70.png" alt="" />)
        : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">Log In</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">Register</Link>
            </li>
          </ul>
        )}
        
      <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
