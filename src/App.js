import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
// import SideNavbar from "./components/SideNavbar";
import Shoping from "./components/Shoping";

export const App = () => {
  return (
    <>
      <CustomNavbar />
      {/* <SideNavbar /> */}
      <Shoping />
    </>
  );
};
export default App;
