import './singlePost.css';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function SinglePost({post}) { //Destructuring the props obj
    
    const { user } = useContext(Context);

    const handleDelete = async()=> {
        try{
            await axios.delete(`/posts/${post._id}`,{data:
                {
                    username: user.user.username
                }
            });
        window.location.replace('/');
    }catch (err) {
        console.log(err);
    }
    }    
    
    const PF = "http://localhost:5000/images/"
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
            {post.photo && 
                <img src={PF+post.photo} alt="" className="singlePostImg" />
            }
                <h1 className="singlePostTitle">{post.title}
                   {post.username === user?.user.username && 
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                    </div>
                   }
                </h1>
                <div className="singlePostInfo">
                
                    <span className="singlePostAuthor">Author:
                    <Link className="link" to={`/?username=${post.username}`}>
                         <b> {post.username}</b>
                    </Link> 
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toLocaleString()}</span>
                </div>
                <p className="singlePostDesc">{post.desc}</p>
            </div>
        </div>
    )
}
