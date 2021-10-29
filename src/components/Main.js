import React from "react";
import PostController from "./Post/PostController";
import "../css/MainStyles.css";
import "../css/Sidebar.css";
import CarouselWork from "./Carousel/CarouselWork";
import { userData } from "../data";
import Sidebar from "./Sidebar/Sidebar";
import useBreakpoint from "../useBreakpoint";
import { connect } from "react-redux";

const queries = {
  sm: "(max-width: 1020px)",
};

const renderPostController = ({ ohmyState }) => {
  const way = Object.entries(ohmyState.postData);
  const displayData = way.map((key) => {
    return <PostController data={key[1]} />;
  });
  return displayData;
};

const Main = (props) => {
  const { sm } = useBreakpoint(queries);

  return (
    <div className='main-container'>
      <CarouselWork />
      {!sm && <Sidebar />}
      <div className='item-posts'>{renderPostController(props)}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ohmyState: state };
};
export default connect(mapStateToProps)(Main);
