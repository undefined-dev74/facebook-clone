import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import { useStateValue } from './StateProvider';
import StoryReel from './StoryReel';

function Feed() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic={user.photoURL}
        message={'The first post message'}
        timestamp="8am"
        image="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        username={user.displayName}
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
