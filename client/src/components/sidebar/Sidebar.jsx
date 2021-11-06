import './sidebar.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(()=> {
        const fetchCats = async()=> {
            let res = await axios.get("/categories");
            setCats(res.data);
        }
        fetchCats();
    },[]);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=" alt="" />
                <p>Lorem ipsum dolor sit amet, consectesperis? Quisquam, modi dolorem.</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
            { cats.map(cat => (
                <li className="sidebarListItem">
                <Link className="link" to={`/?cat=${cat.name}`}>
                    {cat.name}
                </Link>
                </li>
                
            )) }
            </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                FOLLOW US
                </span>
                <div className="sidebarSocial">
                    <i className="sidebarSocialIcon fab fa-facebook"></i>
                    <i className="sidebarSocialIcon fab fa-instagram"></i>
                    <i className="sidebarSocialIcon fab fa-pinterest"></i>
                    <i className="sidebarSocialIcon fab fa-twitter"></i>
                </div>
            </div>
        </div>
    )
}
