import React from 'react'
import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account.</span>
                    <span className="settingsDeleteTitle">Delete account.</span>
                </div>
                <form  className="settingsForm">
                    <label>Profile Picture.</label>
                    <div className="settingsPfP">
                        <img src="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPfPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: 'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Drip"/>
                    <label>Email</label>
                    <input type="email" placeholder="drip@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update.</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
