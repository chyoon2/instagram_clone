import React from "react";
import IconMenu from "./IconMenu";
import { Input, Segment, Grid, Image } from "semantic-ui-react";
import InstagramScriptLogo from "../img/InstagramScriptLogo.png";

const Header = () => {
  return (
    <Segment>
      <Grid columns='equal' padded>
        <Grid.Column>
          <Image src={InstagramScriptLogo} size={"small"} />
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Input className='icon' icon='search' placeholder='Search...' />
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <IconMenu />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};
export default Header;
