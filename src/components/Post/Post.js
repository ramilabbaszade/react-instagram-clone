import React from 'react'

import ProfileImage from '../UI Elements/components/ProfileImage/ProfileImage'
import exProfilePhoto from '../../assets/img/profile1.jpg'


import './Post.css'

const Post = () => {
    return (
        <div className="post-item">
            <div className="post-header">
                <ProfileImage className="small-profile" profileName="nickname" profileWithNameRow />
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="5" cy="12" r="1" />
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                </svg>
            </div>
            <div className="post-image">
                <img src={exProfilePhoto} alt="" />
            </div>
            <div className="post-footer">
                <div className="post-actions">
                    <div className="post-actions__left">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                            <line x1="12" y1="12" x2="12" y2="12.01" />
                            <line x1="8" y1="12" x2="8" y2="12.01" />
                            <line x1="16" y1="12" x2="16" y2="12.01" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                            <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
                        </svg>
                    </div>
                    <div className="post-actions__right">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                        </svg>
                    </div>
                </div>
                <div className="post-likes"></div>
                <div className="post-time"></div>
                <div className="post-comment">
                    <hr/>
                    <form className="post-comment-form">
                        <input type="text" placeholder="Add a comment"/>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Post
