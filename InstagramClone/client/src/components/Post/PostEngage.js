import React from "react";

const styles = {
  container: {
    display: "Inline-grid",
    gridTemplateColumns: "50px 50px 50px",
    gridTemplateRows: "50px",
    float: "left",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const PostEngage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.icons}>
        <i class='far fa-heart fa-2x'></i>
      </div>
      <div style={styles.icons}>
        <i class='far fa-comment fa-2x'></i>
      </div>
      <div style={styles.icons}>
        <i class='far fa-paper-plane fa-2x'></i>
      </div>
    </div>
  );
};

export default PostEngage;
