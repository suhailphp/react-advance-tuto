import React, { useEffect, useState } from "react";
import Axios from "axios";

function Users(props) {
  const [users, setUser] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((users) => {
        setUser(users.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
