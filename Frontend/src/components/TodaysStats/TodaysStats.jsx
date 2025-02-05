




import Attendance from './Attendance'; // Assuming you want to keep the same layout
import Overtime from './Overtime'; // Same assumption for Lefts component

const TodaysStats = () => {
  return (
    <div className="todaysStats">
      <Attendance />
      <Overtime />
    </div>
  );
};

export default TodaysStats;
