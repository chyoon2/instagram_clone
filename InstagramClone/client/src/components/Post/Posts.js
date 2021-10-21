import React from "react";
import faker from "faker";
import PostHeader from "./PostHeader";
import PostInfo from "./PostInfo";
import PostImage from "./PostImage";
import PostEngage from "./PostEngage.js";
import PostBookmark from "./PostBookmark.js";
import PostViews from "./PostViews";
import PostCaption from "./PostCaption";
import PostComments from "./PostComments";
import PostLikes from "./PostLikes";
import PostTime from "./PostTime";
import PostAddComment from "./PostAddComment";

import "../../css/Posts.css";

const Posts = () => {
  return (
    <div className='post-container'>
      <div className='post-header'>
        <PostHeader />
      </div>
      <div className='post-info'>
        <PostInfo />
      </div>
      <div className='post-image'>
        <PostImage />
      </div>
      <div className='post-engage'>
        <PostEngage />
      </div>
      <div className='post-bookmark'>
        <PostBookmark />
      </div>
      <div className='post-view-views'>
        <PostViews />
      </div>
      <div className='post-Caption'>
        <PostCaption />
      </div>
      <div className='post-comments'>
        <PostComments />
      </div>
      <div className='post-like'>
        <PostLikes />
      </div>
      <div className='post-time'>
        <PostTime />
      </div>
      <div className='post-addComment'>
        <PostAddComment />
      </div>
    </div>
  );
};
export default Posts;
