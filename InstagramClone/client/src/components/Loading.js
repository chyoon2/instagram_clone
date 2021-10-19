import React from "react";
import Loader from "react-loader-spinner";

export default class Loading extends React.Component {
  render() {
    return (
      <Loader
        type='TailSpin'
        color='#00BFFF'
        height={30}
        width={30}
        timeout={2000}
      />
    );
  }
}
