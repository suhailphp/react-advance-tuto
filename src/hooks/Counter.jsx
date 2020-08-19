import React, { Fragment, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //setting string name in state using react hooks
  const [name, setName] = useState("");

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
