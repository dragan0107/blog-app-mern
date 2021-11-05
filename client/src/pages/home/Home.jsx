import React, { useEffect } from 'react'
import { useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios';
import './home.css'

export default function Home() {
    const [posts,setPosts] = useState([]);

    useEffect(()=> {

        const fetchPosts = async () => {
           const res = await axios.get("/posts");
           setPosts(res.data)
           
        }
        fetchPosts();
    },[]) //array parameter means it will run just once
    return (
        <>
        <Header/>
        <div className="home">
            <Posts inputPosts={posts}/>
            <Sidebar/>
        </div>
        </>
    )
}
