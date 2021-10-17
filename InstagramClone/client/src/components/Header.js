import React from "react";
import IconMenu from "./IconMenu";
import { Input, Segment, Grid, Image, Container } from "semantic-ui-react";
import InstagramScriptLogo from "../img/InstagramScriptLogo.png";
import "../css/headerStyles.css";

const Header = () => {
  return (
    <div className='parent'>
      <Segment className='scales'>
        <Grid columns={3}>
          <Grid.Column color={"red"}>
            <Image src={InstagramScriptLogo} size={"tiny"} />
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Input placeholder='Search...' />
          </Grid.Column>
          <Grid.Column textAlign='right'>
            <IconMenu />
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};
export default Header;
