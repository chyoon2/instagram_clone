import React from "react";
import Header from "./Header";
import "../css/headerStyles.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }
  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 768px)").addEventListener("change", handler);
  }

  render() {
    return (
      <div>
        {this.state.matches && <h1>Big Screen</h1>}
        {!this.state.matches && <h3>Small Screen</h3>}
        <Header />
      </div>
    );
  }
}

export default App;
