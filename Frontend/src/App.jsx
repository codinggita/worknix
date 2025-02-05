// // // import React from 'react';
// // // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// // // // Import pages
// // // import Signup from './components/Signup/Signup.jsx';
// // // import Login from './components/Login/Login';
// // // // import Home from './components/Home/Home';
// // // // import UserProfile from './components/UserProfile/UserProfile';
// // // // import JobOpening from './components/JobOpening/JobOpening';
// // // // import AssistanceCandidate from './components/AssistanceCandidate/AssistanceCandidate';
// // // // import Interview from './components/Interview/Interview';
// // // // import TodaysStats from './components/TodaysStats/TodaysStats';
// // // // import QuickAction from './components/QuickAction/QuickAction';
// // // // import WorkFlow from './components/WorkFlow/WorkFlow';

// // // const App = () => {
// // //   return (
// // //     <Router>
// // //       <div className="App">
// // //         <Switch>
// // //           {/* Define routes for each page */}
// // //           <Route exact path="/signup" component={Signup} />
// // //           <Route exact path="/login" component={Login} />
// // //           {/* <Route exact path="/home" component={Home} />
// // //           <Route exact path="/user-profile" component={UserProfile} />
// // //           <Route exact path="/job-openings" component={JobOpening} />
// // //           <Route exact path="/assistance-candidate" component={AssistanceCandidate} />
// // //           <Route exact path="/interviews" component={Interview} />
// // //           <Route exact path="/todays-stats" component={TodaysStats} />
// // //           <Route exact path="/quick-action" component={QuickAction} />
// // //           <Route exact path="/workflow" component={WorkFlow} /> */}

// // //           {/* Default Route */}
// // //           <Route exact path="/" component={Signup} />
// // //         </Switch>
// // //       </div>
// // //     </Router>
// // //   );
// // // };

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home/Home"; // Ensure correct import path
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// // import TodaysStats from './components/TodaysStats/TodaysStats';
// import UserProfile from './components/UserProfile/UserProfile';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 {/* <Route path="/" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/todays-stats" element={<TodaysStats />} />
//                 {/* Adding /* to allow nested routes under /user-profile */}
//                 <Route path="/user-profile" element={<UserProfile />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/" element={<Login />}             </Routes>
//         </Router>
//     );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"; // Ensure correct import path
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import TodaysStats from './components/TodaysStats/TodaysStats';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/todays-stats" element={<TodaysStats />} />
                <Route path="/user-profile" element={<UserProfile />} />
            </Routes>
        </Router>
    );
}

export default App;
