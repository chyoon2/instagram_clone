import React from "react";
import PostHeader from "../Post/PostHeader";
// import { userData } from "../../data";
import Button from "./Button";
import "../../css/Sidebar.css";
import { connect } from "react-redux";

const styles = {
  container: {
    display: "inline-grid",
    gridTemplateColumns: "1fr 1fr",
    float: "left",
    alignSelf: "center",
  },
};

const sugHeader = ({ suggestions, userData }) => {
  const suggestionsProp = suggestions ? true : false;

  if (suggestions === false) {
    return (
      <div style={styles.container}>
        <div className='activeUser'>
          <PostHeader
            data={userData.postData[14]}
            suggestions={suggestionsProp}
          />
        </div>
        <Button text={"Switch"} />
      </div>
    );
  } else {
    return (
      <div style={styles.container}>
        <div className='activeUser'>
          <PostHeader
            data={userData.postData[14]}
            suggestions={suggestionsProp}
          />
        </div>
        <Button style={styles.text} text={"Switch"} />
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return { userData: state };
};
export default connect(mapStateToProps)(sugHeader);
