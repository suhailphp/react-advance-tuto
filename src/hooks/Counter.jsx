import React, { Fragment, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const Counter = () => {
  const [count, setCount] = useState(0);
  //setting string name in state using react hooks
  const [name, setName] = useState("");

  useDocumentTitle(`Hello Mr ${name} , count is ${count}`);

  return (
    <Fragment>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        hello {name},This is Count of {count}
        <button onClick={() => setCount(count + 1)}>Count</button>
      </div>
    </Fragment>
  );
};

export default Counter;
