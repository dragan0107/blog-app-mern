import React from 'react'
import Post from '../post/Post'
import './posts.css'

export default function Posts({inputPosts}) { // we de-structure the inputPosts from the props object
    
    return (
        <div className="posts">
            {inputPosts.map((post, index)=> <Post key={index} post={post}/> //we loop through the inputposts array and create a post for each element
            )}
        </div>
    )
}
