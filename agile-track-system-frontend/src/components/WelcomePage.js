import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css"; // Import CSS for styling

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="welcome-container">
            <div className="content">
                <h1> Agile Track System</h1>
                <p>Streamline your scrum and task management effortlessly.</p>

                <div className="buttons">
                    <button onClick={() => navigate("/login")}>Sign In</button>
                    <button onClick={() => navigate("/signup")}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
