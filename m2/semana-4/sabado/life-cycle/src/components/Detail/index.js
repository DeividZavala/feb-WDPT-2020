import React, { Component } from "react";

class Detail extends Component {
  render() {
    console.log(this.props);
    return <h1>Id: {this.props.match.params.id}</h1>;
  }
}

export default Detail;
