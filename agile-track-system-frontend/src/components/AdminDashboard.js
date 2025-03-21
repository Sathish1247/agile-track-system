import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="admin-dashboard-container">
            <div className="admin-dashboard">
                <h2>Admin Dashboard</h2>
                <button className="create-btn" onClick={() => navigate("/create-scrum")}>Create Scrum</button>
                <button className="assign-btn" onClick={() => navigate("/assign-task")}>Assign Task</button>
            </div>
        </div>
    );
};

export default AdminDashboard;
