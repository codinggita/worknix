
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"; // Ensure correct import path
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import TodaysStats from './components/TodaysStats/TodaysStats';
import UserProfile from './components/UserProfile/UserProfile';
import Action from './components/Actions.jsx/Action'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/todays-stats" element={<TodaysStats />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/action" element={<Action />} />

            </Routes>
        </Router>
    );
}

export default App;
