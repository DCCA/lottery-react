import logo from "./logo.svg";
import "./App.css";
import React from "react";
import web3 from "./web3";
import { version } from "react-dom";
import lottery from "./lottery";

class App extends React.Component {
  stete = {
    manager: ''
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();

    this.setState({
      manager: manager
    })
  }
  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is mangeg by {this.state.manager}</p>
      </div>
    );
  }
}
export default App;
