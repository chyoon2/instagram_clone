import React from "react";
import faker from "faker";
import "../../css/Posts.css";
import { data } from "../../data";

const PostImage = ({ data }) => {
  return (
    <div>
      <img alt='post' src={data.jpeg} />
    </div>
  );
};
export default PostImage;
