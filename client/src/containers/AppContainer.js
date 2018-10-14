import React, { Component } from "react";
import { connect } from "react-redux";

class AppContainer extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps)(AppContainer);
