import React from "react";
import NavigationBar from "../Common/NavigationBar";
import { Main } from "./Main"; // The main content of the Home page

const Home = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Navigation Bar */}
      <div
        className="fixed top-0 left-0 h-full w-20 bg-white shadow-md"
        style={{ borderRight: "2px solid #008080" }} // Sidebar width = 5rem
      >
        <NavigationBar />
      </div>

      {/* Main Content (Now Takes More Width) */}
      <div className="flex flex-1 justify-center items-start ml-20 p-8 w-[calc(100%-5rem)]">
        <div className="main-content w-full max-w-7xl">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Home;
