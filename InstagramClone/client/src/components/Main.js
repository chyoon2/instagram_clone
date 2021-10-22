import React from "react";
import PostController from "./Post/PostController";
import "../css/MainStyles.css";

const Main = () => {
  return (
    <div className='main-container'>
      <div className='item-stories'></div>
      <div className='item-posts'>
        <PostController />
      </div>
    </div>
  );
};

export default Main;
