import React, { Component } from "react";
import withToolTip from "./withToolTip";

class Movie extends Component {
  render() {
    return <div>Movie</div>;
  }
}

export default withToolTip(Movie);
