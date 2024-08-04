import React from "react";

// Simulated authentication check
const isAuthenticated = () => {
  // In a real application, this would check the authentication state
  return localStorage.getItem("authToken") !== null;
};

function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    console.log("Component withAuth Props:", props);
    console.log("Component withAuth Component:", Component);
    if (isAuthenticated()) {
      return <div>Please log in to access this page.</div>;
    }
    return <Component {...props} />;
  };
}

export default withAuth;
