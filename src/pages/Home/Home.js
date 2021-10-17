import React from 'react'
import Stories from '../../components/Stories/Stories'
import Post from '../../components/Post/Post'
import Suggestions from '../../components/Suggestions/Suggestions'
import './Home.css'
import {posts} from "../../data";

const Home = () => {
    return (
        <div className="container home-page">
            <div className="main-home">
                <Stories />
                {
                    posts.map(post =>
                        <Post
                            userName={post.username}
                            userProfile={post.userProfile}
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
