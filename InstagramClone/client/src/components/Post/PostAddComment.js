import React from "react";
import "../../css/Posts.css";

const styles = {
  container: {
    display: "Inline-grid",
    gridTemplateColumns: "30px 560px 30px",
    gridTemplateRows: "50px",
    float: "left",
  },

  buttonDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bolder",
    fontSize: "17",
    opacity: " 0.5",
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "light gray",
    marginLeft: "15px",
    opacity: " 0.5",
  },

  inputDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const PostAddComment = () => {
  return (
    <div style={styles.container}>
      <div style={styles.iconDiv}>
        <i class='far fa-smile fa-2x'></i>
      </div>

      <div style={styles.inputDiv}>
        <input
          type='text'
          className='input comment'
          placeHolder='Add a comment'
        />
      </div>

      <div style={styles.buttonDiv}>POST</div>
    </div>
  );
};

export default PostAddComment;
