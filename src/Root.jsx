import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./style/GlobalStyle";

function Root() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}
export default Root;
