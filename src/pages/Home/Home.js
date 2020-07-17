import React, { useState, useEffect } from 'react'

import Stories from '../../components/Stories/Stories'
import Post from '../../components/Post/Post'
import Suggestions from '../../components/Suggestions/Suggestions'
import { db } from '../../firebase'
import './Home.css'

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div className="container home-page">
            <div className="main-home">
                <Stories />
                {
                    posts.map(post =>
                        <Post
                            userName={post.username}
                            caption={post.caption}
                            imageUrl={post.imageUrl}
                        />
                    )
                }
            </div>
            <div className="sidebar-home">
                <Suggestions />
            </div>
        </div>
    )
}

export default Home
