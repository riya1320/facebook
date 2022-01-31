import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";



function Feed() {
  return <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic='https://profiles.howard.edu/sites/profiles.howard.edu/files/A0001156.jpg'
        message='Wow this is going on another level!!!'
        timestamp='YAYYYYYYYYYYYYYYYYY'
        username='romil69'
        image='http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Whatsapp-DP-2-2.jpg'
      />
      <Post
         profilePic='https://res.cloudinary.com/jerrick/image/upload/v1594393757/5f08849df94017001c1de005.jpg'
         message='Great Experience'
         timestamp='BOOOOOOOOOOOOOOOOOM!!!!!!!!'
         username='Kinjal88boom' />
      <Post />

      

      
  </div>;
}

export default Feed;
