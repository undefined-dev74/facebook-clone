import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        title="Aman Jha"
        image="https://images.unsplash.com/photo-1609532347907-224178e3c438?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://images.unsplash.com/photo-1609523432569-bd0b0054ab9b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <Story
        title="Future Dev"
        image="https://images.unsplash.com/photo-1609532347907-224178e3c438?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://images.unsplash.com/photo-1609564593521-43075214ce0f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <Story
        title="Next Future Dev"
        image="https://images.unsplash.com/photo-1535949686800-a6b928ce2fd5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bWVuc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://images.unsplash.com/photo-1551022372-0bdac482b9d6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <Story
        title="Top developer"
        image="https://images.unsplash.com/photo-1578219838380-209418519d64?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://images.unsplash.com/photo-1578219839357-18b0addefa23?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
}

export default StoryReel;
