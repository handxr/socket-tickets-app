import { Navigate } from "react-router-dom";
import { useHideMenu } from "../../../hooks/use-hide-menu";
import { LoginForm } from "../components";
import { useAuth } from "../hooks";

export function Login() {
  const { auth } = useAuth();

  if (auth.agent && auth.desk) {
    return <Navigate to="/desk" />;
  }

  useHideMenu(false);

  return (
    <>
      <LoginForm />
    </>
  );
}
