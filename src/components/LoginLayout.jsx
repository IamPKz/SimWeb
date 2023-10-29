import { Navigate, useOutlet } from "react-router-dom";

export const LoginLayout = () => {

  const outlet = useOutlet();

  const userType = localStorage.getItem('userType');

  if (userType) {
    if(userType == "user"){
      return <Navigate to="/user/rawlogs" replace />;
    }
    else if(userType == "admin"){
      return <Navigate to="/admin/file" replace />;
    }
  }

  return (
    <div>
      {outlet}
    </div>
  );
};
