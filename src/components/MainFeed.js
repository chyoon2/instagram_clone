import React from "react";
import Header from "./Header/Header";
import Main from "./Main";
import "../css/MainFeed.css";

const MainFeed = () => {
  return (
    <div className='mainFeed-container'>
      <Header />
      <Main />
    </div>
  );
};

export default MainFeed;
