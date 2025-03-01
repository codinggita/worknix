import React from "react";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="flex flex-col items-center">
        {/* Professional Logo (Replace with an actual logo if needed) */}
        <div className="text-3xl font-bold text-teal-700 mb-4">Worknix</div>
        
        {/* Smooth Spinning Loader */}
        <RingLoader color="#008080" size={70} speedMultiplier={1.5} />
      </div>
    </div>
  );
};

export default Loader;
