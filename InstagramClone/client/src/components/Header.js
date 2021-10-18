import React from "react";
import IconMenu from "./IconMenu";
import igLogo from "../img/lastIg.png";
import HeaderStylesCSS from "../css/headerStyles.css";

const styles = {
  pic: {
    minWidth: "50px",
  },
};

const searchField = () => {
  return "Search...";
};

const Header = () => {
  return (
    <div className='grid-container'>
      <div className='grid-item logo'>
        <img style={styles.pic} src={igLogo} alt='Logo' />
      </div>

      <div className='grid-item search'>
        <input type='text' className='input' placeholder=' Search...' />
      </div>

      <div className='grid-item iconMenu'>
        <IconMenu />
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
