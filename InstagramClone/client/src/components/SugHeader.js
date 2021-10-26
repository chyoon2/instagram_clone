import React from "react";
import PostHeader from "./Post/PostHeader";
import { userData } from "../data";
import Button from "./Button";
import "../css/Sidebar.css";

const sugHeader = ({ pic }) => {
  return (
    <div>
      <div className='activeUser'>
        <PostHeader data={userData[14]} pic={pic} />
      </div>
      <div className='button'>
        <Button text={"Switch"} />
      </div>
    </div>
  );
};

export default sugHeader;
