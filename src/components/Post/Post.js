import React from 'react'

import exProfilePhoto from '../../assets/img/profile1.jpg'

import ProfileAvatar from '../UI Elements/components/ProfileImage/ProfileAvatar'
import ProfileTitles from '../UI Elements/components/ProfileImage/ProfileTitles'

import './Post.css'

const Post = ({ userName, caption, imageUrl, userProfile }) => {
    return (
        <div className="post-item">
            <div className="post-header">
                <div className="post-header-nickname">
                    <ProfileAvatar picture={userProfile || exProfilePhoto} userName={userName} className="small-profile" />
                    <ProfileTitles userName={userName} paddingStyle={{ paddingLeft: '5px' }} />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="5" cy="12" r="1" />
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                </svg>
            </div>
            <div className="post-image">
                <img src={imageUrl} alt="" />
            </div>
            <div className="post-footer">
                <div className="post-actions">
                    <div className="post-actions__left">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                        </svg>
                    </div>
                </div>
                <div className="post-likes">Liked by <b>elonmusk</b> and <b>13.523 others</b> </div>
                <div className="post-body">
                    <div className="post-author-title">
                        <p className="post-user-comment">
                            <b>{userName}</b>
                            {caption}
                        </p>
                        <div className="view-all-comments">View all comments</div>
                    </div>
                    <div className="post-users-comments">
                        <p className="post-user-comment">
                            <b>rmlabs</b>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore explicabo, debitis minima quibusdam animi sed ex perspiciatis maxime eius, ullam, deserunt impedit quia totam? Tenetur delectus numquam impedit harum
                        </p>
                        <p className="post-user-comment">
                            <b>rmlabs</b>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore explicabo, debitis minima quibusdam animi sed ex perspiciatis maxime eius, ullam, deserunt impedit quia totam? Tenetur delectus numquam impedit harum
                        </p>
                        <p className="post-user-comment">
                            <b>rmlabs</b>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore explicabo, debitis minima quibusdam animi sed ex perspiciatis maxime eius, ullam, deserunt impedit quia totam? Tenetur delectus numquam impedit harum
                        </p>
                    </div>
                </div>
                <div className="post-time">2 days ago</div>
                <div className="post-comment">
                    <form className="post-comment-form">
                        <input type="text" placeholder="Add a comment" />
                        <button>Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Post
