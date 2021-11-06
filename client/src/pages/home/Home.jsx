import React, { useEffect } from 'react'
import { useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios';
import './home.css'
import { useLocation } from 'react-router'

export default function Home() {
    const [posts,setPosts] = useState([]);
    const [noPosts,setNoPosts] = useState(false);
    const {search} = useLocation();


    useEffect(()=> {

        const fetchPosts = async () => {
           const res = await axios.get(`/posts/${search}`);
           setPosts(res.data)
           if (res.data.length===0) {
            setNoPosts(true)
           } else {
            setNoPosts(false)
           };
        }
        fetchPosts();
    },[search]) // On the change of search, the function will run again.
    return (
        <>
        <Header/>
        <div className="home">
           {noPosts && <h1 className="noPosts">No posts for the selected category. </h1>}
            <Posts inputPosts={posts}/>
            <Sidebar/>
        </div>
        </>
    )
}
