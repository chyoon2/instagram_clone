import React from "react";
import faker from "faker";
import "../../css/Posts.css";

const styles = {
  container: { display: "grid", gridTemplateColumns: "50px 100px" },
  circle: {
    maxWidth: "30px",
    maxHeight: "30px",
    borderRadius: "15px",
  },
  userName: {
    fontWeight: "900",
  },
};

const PostHeader = () => {
  return (
    <div style={styles.container}>
      <img style={styles.circle} alt='user' src={faker.image.avatar()} />
      <span style={styles.userName}>{faker.name.findName()}</span>
    </div>
  );
};

export default PostHeader;
