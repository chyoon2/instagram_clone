import React from "react";
import Posts from "./Post/Posts";
import "../css/MainStyles.css";

const Main = () => {
  return (
    <div className='main-container'>
      <div className='item-stories'></div>
      <div className='item-posts'>
        <Posts />
      </div>
    </div>
  );
};

export default Main;
