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
    <div className="user-profile">
      {/* Sidebar Navigation */}
      <NavigationBar />

      {/* Main Content */}
      <div className="main-content">
        <div className="user-plate">
          <User_plate />
        </div>

        <div className="performance-review">
          <Performance />
        </div>

        <div className="goals">
          <Goals />
        </div>

        <div className="batches">
          <Batches />
        </div>

        <div className="career-path">
          <CareerPath />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserProfile;

