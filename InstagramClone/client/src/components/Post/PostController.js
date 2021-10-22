import React from "react";
import PostHeader from "./PostHeader";
import PostInfo from "./PostInfo";
import PostImage from "./PostImage";
import PostEngage from "./PostEngage.js";
import PostComments from "./PostComments";
import PostFooter from "./PostFooter";
import PostAddComment from "./PostAddComment";
import "../../css/Posts.css";

const PostController = ({ data }) => {
  return (
    <div className='post-container'>
      <div className='post-header'>
        <PostHeader data={data} />
      </div>

      <div className='post-info'>
        <PostInfo icon={"fas fa-ellipsis-h"} />
      </div>

      <div className='post-image'>
        <PostImage data={data} />
      </div>

      <div className='post-engage'>
        <PostEngage />
      </div>

      <div className='post-bookmark'>
        <PostInfo icon={"far fa-bookmark"} size={"fa-2x"} />
      </div>

      <div className='footer post-views'>
        <PostFooter type={"views"} />
      </div>

      <div className='footer post-caption'>
        <PostFooter type={"caption"} />
      </div>

      <div className='footer post-comments'>
        <PostFooter type={"comments"} />
      </div>

      <div className='post-likes'>
        <PostInfo icon='far fa-heart' />
      </div>

      <div className='footer post-time'>
        <PostFooter type={"time"} />
      </div>

      <div className='post-addComment'>
        <PostAddComment />
      </div>
    </div>
  );
};
export default PostController;

// views, caption, comments, time
