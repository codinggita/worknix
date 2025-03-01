import React from "react";
import NavigationBar from "../Common/NavigationBar";
import Main from "./Main"; // The main content of the Action page

const Action = () => {
  return (
    <div className="action-container">
 {/* Left Navigation Bar */}
 <div className="navbar" style={{ width: "250px", position: "fixed", left: 0, top: 0, bottom: 0 }}>
    <NavigationBar />
  </div>

  {/* Main Content */}
  <div style={{ marginLeft: "250px", flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div className="main-content" style={{ marginTop: "0px" }}>
      <Main />
    </div>
  </div>
</div>

  );
};

export default Action;
