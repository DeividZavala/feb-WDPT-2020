import React, { Component } from "react";

class Detail extends Component {
  state = { id: 0 };

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const { id } = nextProps.match.params;
      this.setState({ id });
    }
  }
  render() {
    return <h1>test {this.state.id}</h1>;
  }
}

export default Detail;
