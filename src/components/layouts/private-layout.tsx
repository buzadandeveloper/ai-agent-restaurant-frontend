import { Outlet } from "react-router-dom";

export const PrivateLayout = () => {
  return (
    <>
      Only private <Outlet />
    </>
  );
};
