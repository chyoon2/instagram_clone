import React from "react";
import faker from "faker";
import "../../css/Posts.css";
import PostInfo from "./PostInfo";

// <div className='post-info'>
//       <PostInfo icon={"fas fa-ellipsis-h"} />
//     </div>

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "35px 170px 30px",
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
    paddingTop: "35px",
    justifySelf: "left",
  },
  userSpan: {
    textAlign: "left",
    paddingLeft: "45px",
  },
  userCircle: {
    margin: "10px",
    marginTop: "20px",
    borderRadius: "30px",
    maxHeight: "56px",
  },
};

const PostHeader = ({ data, suggestions }) => {
  const harryStyles = suggestions === false ? styles.userCircle : styles.circle;
  const spanStyles = suggestions === false ? styles.userSpan : styles.span;
  const user = suggestions === false ? styles.userNameSidebar : styles.userName;

  if (!suggestions) {
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
  } else {
    return (
      <div style={styles.container}>
        <div>
          <img style={harryStyles} alt='user' src={faker.image.avatar()} />
        </div>
        <div style={user}>
          <span style={spanStyles}>{faker.name.findName()}</span>
        </div>
      </div>
    );
  }
};

export default PostHeader;
