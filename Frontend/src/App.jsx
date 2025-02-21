
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home/Home"; // Ensure correct import path
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// import Community from "./components/Community/community";
// import TodaysStats from './components/TodaysStats/TodaysStats';
// import UserProfile from './components/UserProfile/UserProfile';
// import Action from './components/Actions.jsx/Action'
// function App() {
//     return (
//         <Router>
//             <Routes>
            
//                 <Route path="/" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/community" element={<Community />} />
//                 <Route path="/todays-stats" element={<TodaysStats />} />
//                 <Route path="/user-profile" element={<UserProfile />} />
//                 <Route path="/action" element={<Action />} />

//             </Routes>
//         </Router>
//     );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// import Home from "./components/Home/Home";
// import Community from "./components/Community/community";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Protected Routes */}
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/community"
//           element={
//             <ProtectedRoute>
//               <Community />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// import Home from "./components/Home/Home";
// import Community from "./components/Community/community";
// import TodaysStats from './components/TodaysStats/TodaysStats';
// import UserProfile from './components/UserProfile/UserProfile';
// import Action from './components/Actions.jsx/Action';
// import ProtectedRoute from "./components/ProtectedRoute";  // Ensure the path is correct

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Protected Routes */}
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/community"
//           element={
//             <ProtectedRoute>
//               <Community />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/todays-stats"
//           element={
//             <ProtectedRoute>
//               <TodaysStats />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user-profile"
//           element={
//             <ProtectedRoute>
//               <UserProfile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/action"
//           element={
//             <ProtectedRoute>
//               <Action />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// import Home from "./components/Home/Home";
// import Community from "./components/Community/Community";
// import TodaysStats from './components/TodaysStats/TodaysStats';
// import UserProfile from './components/UserProfile/UserProfile';
// import Action from './components/Actions.jsx/Action';
// import WorkflowPage from './components/Workflow/WorkflowPage'; // Import the Workflow component
// import ProtectedRoute from "./components/ProtectedRoute";  // Ensure the path is correct

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Protected Routes */}
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/community"
//           element={
//             <ProtectedRoute>
//               <Community />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/todays-stats"
//           element={
//             <ProtectedRoute>
//               <TodaysStats />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user-profile"
//           element={
//             <ProtectedRoute>
//               <UserProfile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/action"
//           element={
//             <ProtectedRoute>
//               <Action />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/workflow"
//           element={
//             <ProtectedRoute>
//               <WorkflowPage />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Community from "./components/Community/Community";
import TodaysStats from "./components/TodaysStats/TodaysStats";
import UserProfile from "./components/UserProfile/UserProfile";
import Action from "./components/Actions.jsx/Action";
import WorkflowPage from "./components/Workflow/WorkflowPage"; // Import the Workflow component
import ProtectedRoute from "./components/ProtectedRoute"; // Ensure the path is correct

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        
        {/* Community Route Fix: Allow nested routes */}
        <Route
          path="/community/*"
          element={
            <ProtectedRoute>
              <Community />
            </ProtectedRoute>
          }
        />

        <Route
          path="/todays-stats"
          element={
            <ProtectedRoute>
              <TodaysStats />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/action"
          element={
            <ProtectedRoute>
              <Action />
            </ProtectedRoute>
          }
        />
        <Route
          path="/workflow"
          element={
            <ProtectedRoute>
              <WorkflowPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
