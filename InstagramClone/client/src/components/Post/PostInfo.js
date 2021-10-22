import React from "react";

const style = {
  image: {
    margin: "auto",
    marginRight: "auto",
  },
};
const PostInfo = ({ icon }) => {
  const displayIcon = `${icon} fa-2x`;

  return <i style={style.image} className={displayIcon} />;
};

export default PostInfo;
