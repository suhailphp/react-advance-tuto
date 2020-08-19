import React, { Fragment, useState } from "react";

const Counter = () => {
  //this is for set state value, first obj is value name and second value is setState function for that value
  const [count, setCount] = useState(0);
  //userState function use to set state Values
  return (
    <Fragment>
      <div>
        This is Count of {count}
        <button onClick={() => setCount(count + 1)}>Count</button>
      </div>
    </Fragment>
  );
};

export default Counter;
