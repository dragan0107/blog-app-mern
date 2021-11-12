import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';
import "./topbar.css";

export default function TopBar() {

  const { user, dispatch } = useContext(Context);

  const handleLogOut = () => {
    dispatch({type: "LOGOUT"})
  }

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
          <li className="topListItem" onClick={handleLogOut}>
            {user && "Log Out"}
          </li>
        </ul>
      </div>
      <div className="topRight">
      {
        user ? (<img className="topImg" src={user.user.profilePic} alt="" />)
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
