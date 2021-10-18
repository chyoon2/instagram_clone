import React from "react";
import tinypic from "../img/tinypic.jpg";
import IconMenuCSS from "../css/IconMenu.css";
const styles = {
  circle: {  borderRadius: "10px",
},
};

const IconMenu = () => {
  return (
    <div className='bling'>
      <div className='item home'>
        <i className='home icon' />
      </div>

      <div className='item msg'>
        <i className='facebook messenger icon' />
      </div>

      <div className='item compass'>
        <i className='compass icon' />
      </div>

      <div className='item heart'>
        <i className='heart outline icon' />
      </div>

      <div className='pic'>
        <img style={styles.circle} src={tinypic} alt='profile' />{" "}
      </div>
    </div>
  );
};

export default IconMenu;
