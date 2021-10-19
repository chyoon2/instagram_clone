import React from "react";
import "../css/StoriesStyles.css";
import userpic from "../img/TheUserPic.jpg";
import Carousely from "./Carousely";

const styles = {
  circle: { borderRadius: "15px" },
};

const Stories = () => (
  <div className='Stories-Container'>
    <Carousely />
  </div>
);

// const styles = {
//   container: {
//     backgroundColor: "pink",
//     width: "150px",
//     alignItems: "center",
//     textAlign: "center",
//     justifyContent: "center",
//     justifyItems: "center",
//   },

export default Stories;
