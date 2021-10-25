import React from "react";
import PostController from "./Post/PostController";
import "../css/MainStyles.css";
import "../css/Sidebar.css";
import CarouselWork from "./CarouselWork";
import { userData } from "../data";
import Sidebar from "./Sidebar";
import useBreakpoint from "../useBreakpoint";

const queries = {
  sm: "(max-width: 1200px)",
};

const renderPostController = () => {
  const displayData = userData.map((key) => {
    return <PostController data={key} />;
  });
  return displayData;
};

const Main = () => {
  const { sm } = useBreakpoint(queries);
  const sam = sm === true ? true : false;

  return (
    <div className='main-container'>
      <CarouselWork />

      {!sm && <Sidebar />}

      <div className='item-posts'>{renderPostController()}</div>
    </div>
  );
};

export default Main;
