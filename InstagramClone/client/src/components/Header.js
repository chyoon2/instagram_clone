import React from "react";
import IconMenu from "./IconMenu";
import { Input, Segment, Grid, Image, Container } from "semantic-ui-react";
import Logo from "../img/IgLogoSmall.png";
import "../css/headerStyles.css";

const Header = () => {
  return (
    <div className='outer'>
      <div className='grid-contaner'>
        <div className='grid-item grid-item logo'>
          <img src={Logo} alt='Logo' />
        </div>

        <div className='grid-item grid-item search'>
          <Input placeholder='Search...' />
        </div>

        <div className='grid-item grid-item iconMenu'>
          <IconMenu />
        </div>
      </div>
    </div>
  );
};
export default Header;

// <Segment className='scales'>
// <Grid columns={3}>
//   <Grid.Column color={"red"}>
//     <Image src={InstagramScriptLogo} size={"tiny"} />
//   </Grid.Column>
//   <Grid.Column textAlign='center'>
//     <Input placeholder='Search...' />
//   </Grid.Column>
//   <Grid.Column textAlign='right'>
//     <IconMenu />
//   </Grid.Column>
// </Grid>
// </Segment>
