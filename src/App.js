import React, { Component } from "react";
import "./App.css";
//import Movie from "./hoc/Movie";
//import Counter from "./hooks/Counter";
//import Users from "./hooks/Users";
//import Increment from "./hooks/Increment";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

class App extends Component {
  state = { currentUser: { name: "Suhail" } };
  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <MoviePage />
      </UserContext.Provider>
    );
  }
}

export default App;
