import { Outlet, Navigate } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";

// Outlet = Children
const ProtectedRoutesComponent = ({ admin }) => {
  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        <UserChatComponent />
        <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  }
};

// Before
// const ProtectedRoutesComponent = ({ admin }) => {
//   const auth = false;
//   if (admin) {
//     let adminAuth = true;
//     if (adminAuth) auth = true;
//   } else {
//     let userAuth = true;
//     if (userAuth) auth = true;
//   }

//   return auth ? <Outlet /> : <Navigate to="/login" />;
// };

// export default ProtectedRoutesComponent;

// https://abangpa1ace.tistory.com/209
