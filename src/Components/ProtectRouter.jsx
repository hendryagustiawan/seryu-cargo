import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectRouter = ({ children }) => {
  // const access_token = useSelector((store) => store.user.access_token);
  const access_token = localStorage.getItem("access_token");

  if (!access_token) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return children || <Outlet />;
};

export default ProtectRouter;
