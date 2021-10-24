import React from "react";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  render() {
    return (
      <div className='container' style={{ backgroundColor: "#f9f9f9" }}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
