import React from "react";
import PostHeader from "./PostHeader";
import PostInfo from "./PostInfo";
import PostImage from "./PostImage";
import PostEngage from "./PostEngage.js";
import PostAddComment from "./PostAddComment";
import PostFooter from "./PostFooter";
import PostUserAddedComment from "./PostUserAddedComment";
// import { connect } from "react-redux";
import "../../css/Posts.css";

// const renderMasComments = ({ commentData }) => {
//   console.log(commentData.postData);
//   // console.log(commentData.postData[0].comments);

//   const way = Object.entries(commentData.postData);
//   const displayComment = way.map((key) => {
//     return <PostUserAddedComment />;
//   });
//   return displayComment;
// };

const PostController = ({ data }) => {
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

      {/* 
      <div className='post-likes'>
        <PostInfo icon='far fa-heart' />
      </div>
    */}
      <div>
        <PostUserAddedComment data={data} />
      </div>

      <div className='footer post-time'>
        <PostFooter type={"time"} />
      </div>

      <div className='post-addComment'>
        <PostAddComment data={data.id} />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return { commentData: state };
// };
export default PostController;
