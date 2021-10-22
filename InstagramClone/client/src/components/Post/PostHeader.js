import React from "react";
import faker from "faker";
import "../../css/Posts.css";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "35px 200px",
  },
  circle: {
    margin: "10px",
    maxWidth: "35px",
    maxHeight: "30px",
    borderRadius: "15px",
  },
  userName: {
    fontWeight: "900",
    paddingTop: "15px",
    paddingRight: "500px",
  },

  span: {
    textAlign: "left",
    paddingLeft: "15px",
  },
};

const PostHeader = ({ data }) => {
  return (
    <div style={styles.container}>
      <div>
        <img style={styles.circle} alt='user' src={data.avatar} />
      </div>
      <div style={styles.userName}>
        <span style={styles.span}>{data.name}</span>
      </div>
    </div>
  );
};

export default PostHeader;
