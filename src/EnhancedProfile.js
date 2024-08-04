import React from "react";
import Profile from "./Profile";
import withAuth from "./withAuth";
import withLogging from "./WithLogging";

// Compose HOCs to enhance the Profile component
const EnhancedProfile = withAuth(withLogging(Profile));

export default EnhancedProfile;
