import React from "react";
import tinypic from "../img/TheUserPic.jpg";
import "../css/IconMenuStyles.css";

const styles = {
  circle: { borderRadius: "15px" },
};

const IconMenu = () => {
  return (
    <div className='bling'>
      <div className='item home'>
        <i className='fas fa-home fa-2x' />
      </div>
      <div className='item msg'>
        <i className='fab fa-facebook-messenger fa-2x' />
      </div>
      <div className='item compass'>
        <i className='fas fa-compass fa-2x' />
      </div>
      <div className='item heart'>
        <i className='far fa-heart fa-2x' />
      </div>
      <div className='pic'>
        <img style={styles.circle} src={tinypic} alt='profile' />
      </div>
    </div>
  );
};

export default IconMenu;
