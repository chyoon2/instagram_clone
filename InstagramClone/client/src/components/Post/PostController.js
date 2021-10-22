import React from "react";
import PostHeader from "./PostHeader";
import PostInfo from "./PostInfo";
import PostImage from "./PostImage";
import PostEngage from "./PostEngage.js";
import PostComments from "./PostComments";
import PostFooter from "./PostFooter";
import PostAddComment from "./PostAddComment";

import "../../css/Posts.css";

const PostController = () => {
  return (
    <div className='post-container'>
      <div className='post-header'>
        <PostHeader />
      </div>

      <div className='post-info'>
        <PostInfo icon={"fas fa-ellipsis-h"} />
      </div>

      <div className='post-image'>
        <PostImage />
      </div>

      <div className='post-engage'>
        <PostEngage />
      </div>

      <div className='post-bookmark'>
        <PostInfo icon={"far fa-bookmark"} />
      </div>

      <div className='footer post-views'>
        <PostFooter />
      </div>

      <div className='footer post-caption'>
        <PostFooter />
      </div>

      <div className='footer post-comments'>
        <PostFooter />
      </div>

      <div className='post-likes'>
        <PostInfo icon='far fa-heart' />
      </div>

      <div className='footer post-time'>
        <PostFooter />
      </div>

      <div className='post-addComment'>
        <PostAddComment />
      </div>
    </div>
  );
};
export default PostController;

// views, caption, comments, time
