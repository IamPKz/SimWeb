import { Navigate, useOutlet } from "react-router-dom";

export const UserLayout = () => {

  const outlet = useOutlet();

  const userType = localStorage.getItem('userType');

  if (!userType) {
      return <Navigate to="/login" replace />;
  }

  return (
    <div>
      {outlet}
    </div>
  );
};
