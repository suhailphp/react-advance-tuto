import React, { Fragment, useState } from "react";

const Increment = () => {
  const [value, setValue] = useState(0);
  return (
    <Fragment>
      <div>Increment Value is {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </Fragment>
  );
};
export default Increment;
