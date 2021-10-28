import React from "react";
import PostInfo from "./PostInfo";

const styles = {
  container: {
    display: "Inline-grid",
    gridTemplateColumns: "50px 50px 50px auto",
    gridTemplateRows: "50px",
    float: "left",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bookmark: {
    display: "flex",
    alignItems: "center",
    marginLeft: "440px",
  },
};

const PostEngage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.icons}>
        <i className='far fa-heart fa-2x'></i>
      </div>
      <div style={styles.icons}>
        <i className='far fa-comment fa-2x'></i>
      </div>
      <div style={styles.icons}>
        <i className='far fa-paper-plane fa-2x'></i>
      </div>
      <div style={styles.bookmark}>
        <i className='far fa-bookmark fa-2x'></i>
      </div>
    </div>
  );
};

export default PostEngage;
