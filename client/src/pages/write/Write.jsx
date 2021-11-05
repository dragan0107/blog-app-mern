import './write.css';
import React from 'react'

export default function Write() {
    return (
        <div className="write">
            <form className="writeForm">
            <img className="writeImg" src="https://preview.redd.it/491dibzljr121.jpg?auto=webp&s=cab73925a12959dbc71a1977dc0aa86447ac432a" alt="" />
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" placeholder="Tell us your story.." className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish!</button>
            </form>
        </div>
    )
}
