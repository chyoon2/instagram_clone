import React from "react";
import IconMenu from "./IconMenu";
import igLogo from "../../img/daoneten.png";
import "../../css/HeaderStyles.css";

const styles = {
  pic: {
    minWidth: "50px",
  },
};

const Header = () => {
  return (
    <div className='Container'>
      <div className='grid-container' style={{ backgroundColor: "white" }}>
        <div className='grid-item logo'>
          <img style={styles.pic} src={igLogo} alt='Logo' />
        </div>
        <div className='grid-item search'>
          <input
            type='text'
            className='input header'
            placeholder=' Search...'
          />
        </div>
        <div className='grid-item iconMenu'>
          <IconMenu />
        </div>
      </div>
    </div>
  );
};
export default Header;
