import React from "react";
import PostHeader from "./PostHeader";
import PostInfo from "./PostInfo";
import PostImage from "./PostImage";
import PostEngage from "./PostEngage.js";
import PostComments from "./PostComments";
import PostFooter from "./PostFooter";
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
        <PostInfo />
      </div>

      <div className='post-views'>
        <PostFooter />
      </div>

      <div className='post-caption'>
        <PostFooter />
      </div>

      <div className='post-comments'>
        <PostFooter />
      </div>

      <div className='post-likes'>
        <PostInfo />
      </div>

      <div className='post-time'>
        <PostFooter />
      </div>

      <div className='post-addComment'>
        <PostAddComment />
      </div>
    </div>
  );
};
export default Posts;

// views, caption, comments, time
