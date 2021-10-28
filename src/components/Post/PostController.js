import React from "react";
import PostHeader from "./PostHeader";
import PostInfo from "./PostInfo";
import PostImage from "./PostImage";
import PostEngage from "./PostEngage.js";
import PostAddComment from "./PostAddComment";
import PostFooter from "./PostFooter";
import "../../css/Posts.css";

const PostController = ({ data, commentData }) => {
  return (
    <div className='post-container' style={{ marginBottom: "30px" }}>
      <div className='post-header'>
        <PostHeader data={data} />
      </div>

      <div className='post-image'>
        <PostImage data={data} />
      </div>
      <div className='post-engage'>
        <PostEngage />
      </div>

      <div className='footer post-views'>
        <PostFooter type={"views"} />
      </div>
      <div className='footer post-caption'>
        <PostFooter type={"caption"} data={data} />
      </div>

      <div className='footer post-comments'>
        <PostFooter type={"comments"} />
      </div>

      {/* 
      <div className='post-likes'>
        <PostInfo icon='far fa-heart' />
      </div>
    */}

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
