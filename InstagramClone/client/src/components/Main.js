import React from "react";
import PostController from "./Post/PostController";
import "../css/MainStyles.css";
import { userData } from "../data";

const renderPostController = () => {
  const displayData = userData.map((key) => {
    return <PostController data={key} />;
  });
  return displayData;
};

const Main = () => {
  return (
    <div className='main-container'>
      <div className='item-stories'></div>
      <div className='item-posts'>{renderPostController()}</div>
    </div>
  );
};

export default Main;
