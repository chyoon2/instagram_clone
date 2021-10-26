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
    justifySelf: "left",
  },

  span: {
    textAlign: "left",
    paddingLeft: "15px",
  },
  userNameSidebar: {
    fontWeight: "900",
    fontSize: "17px",
    paddingTop: "40px",
    justifySelf: "left",
  },
  userSpan: {
    textAlign: "left",
    paddingLeft: "45px",
  },
  userCircle: {
    margin: "10px",
    marginTop: "22px",
    borderRadius: "30px",
    maxHeight: "56px",
  },
};

const PostHeader = ({ data, pic }) => {
  const harryStyles = pic === "sidebar" ? styles.userCircle : styles.circle;
  const spanStyles = pic === "sidebar" ? styles.userSpan : styles.span;
  const user = pic === "sidebar" ? styles.userNameSidebar : styles.userName;

  return (
    <div style={styles.container}>
      <div>
        <img style={harryStyles} alt='user' src={data.avatar} />
      </div>
      <div style={user}>
        <span style={spanStyles}>{data.name}</span>
      </div>
    </div>
  );
};

export default PostHeader;
