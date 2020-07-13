import React from 'react'

import Stories from '../../components/Stories/Stories'
import Post from '../../components/Post/Post'
import Suggestions from '../../components/Suggestions/Suggestions'

import './Home.css'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="main-home">
                <Stories />
                <Post />
            </div>
            <div className="sidebar-home">
                <Suggestions />
            </div>
        </div>
    )
}

export default Home
