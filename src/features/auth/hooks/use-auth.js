import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserStorage } from "../utils/get-user-storage";

export function useAuth() {
  const [auth] = React.useState(() => getUserStorage());
  const navigate = useNavigate();

  function logout() {
    window.localStorage.removeItem("agent");
    window.localStorage.removeItem("desk");
    navigate("/access");
  }

  return {
    auth,
    logout,
  };
}
