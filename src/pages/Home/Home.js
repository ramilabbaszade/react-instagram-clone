import React from 'react'

import Stories from '../../components/Stories/Stories'
import Post from '../../components/Post/Post'
import Suggestions from '../../components/SideBar/Suggestions'

import './Home.css'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="main-home">
                <Stories />
                <Post />
            </div>
            <Suggestions />
        </div>
    )
}

export default Home
