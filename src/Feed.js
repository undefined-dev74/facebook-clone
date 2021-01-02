import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic={
          'https://avatars0.githubusercontent.com/u/45736218?s=460&u=e1b306e04f04b1c0d973283e7039b72e1de754cd&v=4'
        }
        message={'The first post message'}
        timestamp="8am"
        image="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        username="aditya._jha"
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
