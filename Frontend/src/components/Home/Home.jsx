import React, { useState, useEffect } from "react";
import axios from "axios";
import './home.css';

function Home() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        // Assuming you pass the username from login to this page
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setUsername(user.username);
        }
    }, []);

    return (
        <div className="home">
            <h1>Hello, {username}</h1>
        </div>
    );
}

export default Home;
