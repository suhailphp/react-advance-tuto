import React, { Fragment, useState } from "react";

const Increment = () => {
  const [value, setValue] = useState(0);
  return (
    <Fragment>
      <div>Increment Value is {value}</div>
    </Fragment>
  );
};
export default Increment;
