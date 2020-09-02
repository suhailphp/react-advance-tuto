import React, { Component, Fragment } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  static contextType = UserContext;
  componentDidMount() {
    console.log("context", this.context);
  }
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <Fragment>
            <div>
              This is movie list , name is{" "}
              {userContext.currentUser ? userContext.currentUser.name : ""}
            </div>
            <MovieRow />
          </Fragment>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
