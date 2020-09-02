import React, { Component } from "react";
import "./App.css";
//import Movie from "./hoc/Movie";
//import Counter from "./hooks/Counter";
//import Users from "./hooks/Users";
//import Increment from "./hooks/Increment";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Login from "./context/Login";

class App extends Component {
  state = { currentUser: null };
  onUserLogin = (name) => {
    this.setState({ currentUser: { name: name } });
  };
  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onUserLogin: this.onUserLogin,
        }}
      >
        <MoviePage />
        <Login />
      </UserContext.Provider>
    );
  }
}

export default App;
