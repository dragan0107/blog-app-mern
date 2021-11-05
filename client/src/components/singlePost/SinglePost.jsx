import './singlePost.css';
import React from 'react'
export default function SinglePost({post}) {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
            {post.photo && 
                <img src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Africa/Mauritius/Mauritius---Beaches---Tropical-beach.jpg" alt="" className="singlePostImg" />
            }
                <h1 className="singlePostTitle">{post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>{post.username}</b></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toLocaleString()}</span>
                </div>
                <p className="singlePostDesc">{post.desc}</p>
            </div>
        </div>
    )
}
