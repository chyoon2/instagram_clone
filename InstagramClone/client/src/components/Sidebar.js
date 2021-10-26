import React from "react";
import "../css/Sidebar.css";
import PostHeader from "./Post/PostHeader";
import { userData } from "../data";
import Button from "./Button";
import Text from "./Text";

const pic = "sidebar";
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='activeUser'>
        <PostHeader data={userData[14]} pic={pic} />
      </div>
      <div className='button'>
        <Button text={"Switch"} />
      </div>
      <div className='text'>
        <Text />
      </div>
      <div className='what'>
        <Button text={"Switch"} />
      </div>
      <div className='suggestedUser0'>
        <PostHeader data={userData[14]} />
      </div>
      <div className='suggestedUser1'>
        <PostHeader data={userData[14]} />
      </div>
      <div className='suggestedUser2'>
        <PostHeader data={userData[14]} />
      </div>
      <div className='suggestedUser3'>
        <PostHeader data={userData[14]} />
      </div>
      <div className='suggestedUser4'>
        <PostHeader data={userData[14]} />
      </div>
    </div>
  );
};

export default Sidebar;
