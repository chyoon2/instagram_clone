import React from "react";
import { Grid, Image } from "semantic-ui-react";

const IconMenu = () => {
  return (
    <Grid columns='5'>
      <Grid.Column textAlign='center'>
        <i className='home icon' />
      </Grid.Column>
      <Grid.Column textAlign='right'>
        <i className='facebook messenger icon' />
      </Grid.Column>
      <Grid.Column textAlign='right'>
        <i className='compass icon' />
      </Grid.Column>
      <Grid.Column textAlign='right'>
        <i className='heart outline icon' />
      </Grid.Column>
      <Grid.Column>
        <Image src={"PortfolioPic.jpg"} size={"medium"} circular />
      </Grid.Column>
    </Grid>
  );
};

export default IconMenu;
