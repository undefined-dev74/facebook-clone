import { Avatar } from '@material-ui/core';
import {
  AccountCircle,
  ChatBubble,
  ExpandMore,
  NearMe,
  ThumbUp,
} from '@material-ui/icons';
import React from 'react';
import './Post.css';
const Post = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>Timestap...</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="post picture" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubble />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircle />
          <ExpandMore />
          <p>Like</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
