import React, { Fragment, useState } from "react";

const Increment = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  return (
    <Fragment>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        Hello {name} ,Increment Value is {value}
      </div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </Fragment>
  );
};
export default Increment;
