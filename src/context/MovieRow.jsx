import React, { useContext } from "react";
import UserContext from "./userContext";

function MovieRow(props) {
  const currentUser = useContext(UserContext);
  return <div>User Name is {currentUser.name}</div>;
}

export default MovieRow;
