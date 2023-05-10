import React from "react";
import { Outlet } from "react-router-dom";

import Directory from "/src/components/directory/directory.component.jsx";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
};

export default Home;
