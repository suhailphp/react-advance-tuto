import React from "react";

function withToolTip(Component) {
  return class WithToolTip extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello</h1>
          <Component />
        </div>
      );
    }
  };
}

export default withToolTip;
