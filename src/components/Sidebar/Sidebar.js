import React from "react";
import "../../css/Sidebar.css";
import Text from "./Text";
import SugHeader from "./SugHeader";

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <SugHeader />
      <div className='text'>
        <Text />
      </div>
      <SugHeader suggestions={true} />
      <SugHeader suggestions={true} />
      <SugHeader suggestions={true} />
      <SugHeader suggestions={true} />
      <SugHeader suggestions={true} />
    </div>
  );
};

export default Sidebar;
