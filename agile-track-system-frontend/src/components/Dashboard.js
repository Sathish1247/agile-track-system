import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            navigate("/login");
        } else if (user.role === "admin") {
            navigate("/admin-dashboard");
        } else {
            navigate("/employee-dashboard");
        }
    }, [navigate]);

    return <div>Redirecting...</div>;
};

export default Dashboard;
