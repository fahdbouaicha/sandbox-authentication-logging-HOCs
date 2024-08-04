import React, { useEffect } from "react";

function withLogging(Component) {
  return function LoggedComponent(props) {
    useEffect(() => {
      console.log("Component withLogging Component:", Component);
      console.log("Component Props:", props);
    }, [props]);

    return <Component {...props} />;
  };
}

export default withLogging;
