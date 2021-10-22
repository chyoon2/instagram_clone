import React from "react";

const style = {
  image: {
    margin: "auto",
    marginRight: "auto",
  },
};
const PostInfo = ({ icon, size }) => {
  const displayIcon = `${icon} + ${size}`;

  return <i style={style.image} className={displayIcon} />;
};

export default PostInfo;
