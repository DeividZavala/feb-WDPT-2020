import React, { Component } from "react";
import { getCharacter } from "../../services/characterService";

class Detail extends Component {
  state = {
    character: {},
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    getCharacter(id).then((res) => {
      console.log(res.data);
      const { data: character } = res;
      this.setState({ character });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const { id } = nextProps.match.params;
      getCharacter(id).then((res) => {
        console.log(res.data);
        const { data: character } = res;
        this.setState({ character });
      });
    }
  }

  render() {
    return <h1>{this.state.character.name}</h1>;
  }
}

export default Detail;
