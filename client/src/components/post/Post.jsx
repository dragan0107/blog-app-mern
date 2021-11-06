import './post.css'
import React from 'react'
import { Link } from 'react-router-dom'
export default function Post({post}) {
    return (
        <div className="post">
        {post.photo &&
            <img className="postImg" src="https://www.fodors.com/wp-content/uploads/2018/06/Greece-Best-Beaches-Hero.jpg" alt="" />
        }
            <div className="postInfo">
                <div className="postCats">
                {post.categories.map(cat => (
                    <Link className="link" to={`/?cat=${cat}`}>
                        <span className="postCat">{cat}</span>
                    </Link>
                ))}
                    
                </div>
                <Link className="link" to={`/post/${post._id}`}>
                <span className="postTitle">
                    {post.title}
                </span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    )
}
