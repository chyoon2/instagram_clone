import React from "react";
import "../../css/Posts.css";

const PostImage = ({ data }) => {
  return (
    <div>
      <img alt='post' src={data.jpeg} />
    </div>
  );
};
export default PostImage;
