import React from "react";
import Header from "./Header";
import Main from "./Main";
import CarouselWork from "./CarouselWork";

class App extends React.Component {
  render() {
    return (
      <div className='container' style={{ backgroundColor: "#f9f9f9" }}>
        <Header />
        <CarouselWork />
        <Main />
      </div>
    );
  }
}

export default App;
// {this.state.matches && <h1>Big Screen</h1>}
// {!this.state.matches && <h3>Small Screen</h3>}
// constructor(props) {
//   super(props);
//   this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
// }
// componentDidMount() {
//   const handler = (e) => this.setState({ matches: e.matches });
//   window.matchMedia("(min-width: 768px)").addEventListener("change", handler);
// }
