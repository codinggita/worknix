// import "./UserProfile.css";
// import User_plate from "./User_plate";
// import Footer from "../Common/Footer"; // Adjust path as per your folder structure
// import NavigationBar from "../Common/NavigationBar"; // Adjust path as per your folder structure
// import Performance from "./Performance";
// import Goals from "./Goals";
// import Batches from "./Batches";
// import CareerPath from "./CareerPath";

// const UserProfile = () => {
//   return (
//     <div className="user-profile">
//       {/* Sidebar Navigation */}
//       <NavigationBar />

//     <div id='fpage'> 
        
//           <User_plate />
//    <div id='spage'>
//     <div id='tpage'>
//           <Performance />
//           <Goals />
//           <Batches />
//           </div>
     
//           <CareerPath />
//           </div>
//           </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default UserProfile;

import "./UserProfile.css";
import User_plate from "./User_plate";
import Footer from "../Common/Footer"; // Adjust path as per your folder structure
import NavigationBar from "../Common/NavigationBar"; // Adjust path as per your folder structure
import Performance from "./Performance";
import Goals from "./Goals";
import Batches from "./Batches";
import CareerPath from "./CareerPath";

const UserProfile = () => {
  return (
    <div className="user-profile min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <NavigationBar className="fixed top-0 left-0 w-full z-50" />

      <div id="fpage" className="pt-20 p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* User Plate */}
        <div className="lg:col-span-1">
          <User_plate />
        </div>

        {/* Middle Section: Performance, Goals, Batches */}
        <div id="spage" className="lg:col-span-2 grid grid-cols-1 gap-6">
          <Performance />
          <Goals />
          <Batches />
        </div>

        {/* Right Section: Career Path */}
        <div className="lg:col-span-1">
          <CareerPath />
        </div>
      </div>

      {/* Footer */}
      <Footer className="mt-6" />
    </div>
  );
};

export default UserProfile;