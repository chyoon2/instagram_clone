import React from "react";
import IconMenu from "./IconMenu";
import { Input, Segment, Grid, Image, Container } from "semantic-ui-react";
import InstagramScriptLogo from "../img/InstagramScriptLogo.png";
import "../css/headerStyles.css";

const Header = () => {
  return (
    <Segment className='media-query' size={"tiny"}>
      <div className='scales'>
        <Grid container columns={3} padded>
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
      </div>
    </Segment>
  );
};
export default Header;
