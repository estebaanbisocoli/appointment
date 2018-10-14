import React, { Component } from "react";
import logo from "./logo.svg";
import { AppHeader } from "./components/layout";
import { Layout } from "antd";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Layout>
        <AppHeader />
      </Layout>
    );
  }
}

export default App;
