import React from "react";

const style = {
  image: {
    margin: "auto",
    marginRight: "auto",
  },
};
const PostInfo = ({ icon }) => {
  const displayIcon = `${icon}`;

  return <i style={style.image} className={displayIcon} />;
};

export default PostInfo;
