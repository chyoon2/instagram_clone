import React from "react";
import faker from "faker";
import "../../css/Posts.css";

const PostImage = () => {
  return (
    <div>
      <img alt='post' src={faker.image.nature()} />
    </div>
  );
};
export default PostImage;
