import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import "../css/MainStyles.css";

const Main = () => (
  <div className='main-container'>
    <div className='item-stories'>
      <Stories />
    </div>
    <div className='item-posts'>
      <Posts />
    </div>
  </div>
);

export default Main;
