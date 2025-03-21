import React, { useEffect, useState } from "react";
import { fetchUserTasks, updateTask } from "../services/api";
import "./EmployeeDashboard.css";

const EmployeeDashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const user = JSON.parse(localStorage.getItem("user"));
                if (!user || !user.id) {
                    setError("User not found. Please log in again.");
                    setLoading(false);
                    return;
                }

                const response = await fetchUserTasks(user.id);
                setTasks(response);
            } catch (err) {
                console.error("Failed to fetch tasks:", err);
                setError("Error fetching tasks. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const handleStatusChange = async (taskId, newStatus) => {
        try {
            console.log(`Updating Task ID: ${taskId} to Status: ${newStatus}`);
            await updateTask(taskId, newStatus);

            // ✅ Update task status in state immediately
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === taskId ? { ...task, status: newStatus } : task
                )
            );

            //alert("Task updated successfully!");
        } catch (error) {
            alert("Error updating task: " + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div className="employee-dashboard-page">
            <div className="employee-dashboard">
                <h2>Employee Dashboard</h2>
                {loading ? (
                    <p className="loading">Loading tasks...</p>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : tasks.length === 0 ? (
                    <p>No tasks assigned yet.</p>
                ) : (
                    <ul className="task-list">
    {tasks.map((task) => (
        <li key={task.id} data-status={task.status}>
            <div className="task-info">
                <span>{task.description}</span>
                <span className={`task-status ${task.status.toLowerCase().replace(" ", "-")}`}>
                    {task.status}
                </span>
            </div>
            <select onChange={(e) => handleStatusChange(task.id, e.target.value)}>
                <option value="">Change Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
        </li>
    ))}
</ul>

                )}
            </div>
        </div>
    );
};

export default EmployeeDashboard;
