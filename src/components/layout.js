import React from "react";
import Nav from "./nav";
function Layout(props) {
  return (
    <div id="container">
      <div id="page-header">
        <h1>YTS Logo</h1>
      </div>
      <Nav />
      <div id="page-content">{props.children}</div>
      <div id="page-footer">Footer</div>
    </div>
  );
}

export default Layout;
