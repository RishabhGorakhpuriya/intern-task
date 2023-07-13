import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "../css/LandingPage.css"
const LandingPage = () => {
    const [greeting, setGreeting] = useState('');
    const [userName, setUserName] = useState('Sam'); // Replace with the user's name
    const currentTime = new Date().getHours();
    const [username, setUsername] = useState('');

    useEffect(() => {
        fetch('/api/user') // Replace with your backend API endpoint
            .then(response => response.json())
            .then(data => setUsername(data.username))
            .catch(error => console.log(error));
    }, []);


    useEffect(() => {
        // Determine the greeting based on the time of day
        if (currentTime >= 5 && currentTime < 12) {
            setGreeting('Good morning');
        } else if (currentTime >= 12 && currentTime < 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good evening');
        }
    }, [currentTime]);

    return (
        <div className="container" style={{ marginTop: "80px" }}>
            <header className="header">
                <h1>Welcome to Rescuer</h1>
            </header>
            <div className="content">
                <h2>{`${greeting} Rescuer!`}</h2>
                <p>{`How are you doing today, ${userName}?`}</p>
                <div className="navigation">
                    <Link to="/create_ticket.html">Create New Ticket</Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
