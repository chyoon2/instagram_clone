import React from "react";
import "../css/Sidebar.css";
import PostHeader from "./Post/PostHeader";
import Button from "./Button";
import Text from "./Text";
import { userData } from "../data";
import SugHeader from "./SugHeader";

const pic = "sidebar";
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <SugHeader />
      <div className='text'>
        <Text />
      </div>
      <div className='what'>
        <Button text={"Switch"} />
      </div>
      <div className='suggestedUser0'>
        <PostHeader data={userData[14]} suggestions={true} />
      </div>
      <div className='follow'>
        <Button text={"Switch"} />
      </div>
      <div className='suggestedUser1'>
        <PostHeader data={userData[14]} suggestions={true} />
      </div>
      <div className='follow'>
        <Button text={"Switch"} />
      </div>
    </div>
  );
};

export default Sidebar;
