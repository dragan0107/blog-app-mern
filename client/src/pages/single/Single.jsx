import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
import axios from 'axios'
import './single.css'

export default function Single() {
    const [post,setPost] = useState({})
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    
    useEffect(()=> {
        const getPost = async() => {

            let post = await axios.get(`/posts/${id}`);
            setPost(post.data)
            
        }
        getPost();
    },[id])
    return (
        <div className="single">
            <SinglePost key={0} post={post}/>
            <Sidebar/>
        </div>
    )
}
