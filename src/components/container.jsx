import React from "react";
import Sidebar from "./Sidebar";
import Mainpage from "./Mainpage";

function container() {
  return (
    <div className="flex flex-row justify-between w-screen  bg-bg-color">
      <Sidebar />
      <Mainpage />
    </div>
  );
}

export default container;
