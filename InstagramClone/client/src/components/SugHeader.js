import React from "react";
import PostHeader from "./Post/PostHeader";
import { userData } from "../data";
import Button from "./Button";
import "../css/Sidebar.css";

const styles = {
  container: {
    display: "inline-grid",
    gridTemplateColumns: "1fr 1fr",
    float: "left",
    alignSelf: "center",
  },
};

const sugHeader = ({ suggestions }) => {
  const suggestionsProp = suggestions ? true : false;

  if (suggestions === false) {
    return (
      <div style={styles.container}>
        <div className='activeUser'>
          <PostHeader data={userData[14]} suggestions={suggestionsProp} />
        </div>
        <Button text={"Switch"} />
      </div>
    );
  } else {
    return (
      <div style={styles.container}>
        <div className='activeUser'>
          <PostHeader data={userData[14]} suggestions={suggestionsProp} />
        </div>
        <Button style={styles.text} text={"Switch"} />
      </div>
    );
  }
};

export default sugHeader;
