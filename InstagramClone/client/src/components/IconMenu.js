import React from "react";
import { Grid, Image } from "semantic-ui-react";
import PortfolioPic from "../img/PortfolioPic.jpg";

const IconMenu = () => {
  return (
    <div>
      <i className='home icon' />
      <i className='facebook messenger icon' />
      <i className='compass icon' />
      <i className='heart outline icon' />
      <Image src={PortfolioPic} size={"tiny"} circular />
    </div>
  );
};

export default IconMenu;
