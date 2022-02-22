import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider.js";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
