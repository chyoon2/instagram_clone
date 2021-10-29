import React, { useState } from "react";
import "../../css/Posts.css";
import { createComment } from "../../actions";
import { connect } from "react-redux";

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
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "light gray",
    marginLeft: "15px",
  },

  inputDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const PostAddComment = (prop) => {
  const [term, setTerm] = useState("");
  const onCommentSubmit = (e) => {
    e.preventDefault();
    prop.createComment({ placing: prop.data, description: term });
    setTerm("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.iconDiv}>
        <i className='far fa-smile fa-2x'></i>
      </div>

      <div style={styles.inputDiv}>
        <form onSubmit={onCommentSubmit}>
          <input
            type='text'
            maxLength='50'
            className='input comment'
            value={term}
            placeholder='Add a comment'
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </div>
      <div style={styles.buttonDiv}>POST</div>
    </div>
  );
};

export default connect(null, { createComment })(PostAddComment);
