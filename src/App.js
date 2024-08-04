import React from "react";
import EnhancedProfile from "./EnhancedProfile";

function App() {
  // Simulated user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  return (
    <div>
      <EnhancedProfile user={user} />
    </div>
  );
}

export default App;
