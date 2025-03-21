import React, { useState, useEffect } from "react";
import { fetchUserTasks, updateTask } from "../services/api";

const UpdateTask = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedTaskId, setSelectedTaskId] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        const loadTasks = async () => {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                const response = await fetchUserTasks(user.id);
                setTasks(response.data);
            }
        };
        loadTasks();
    }, []);

    const handleUpdateTask = async (e) => {
        e.preventDefault();
        try {
            await updateTask(selectedTaskId, status);
            alert("Task updated successfully!");
        } catch (error) {
            alert("Error updating task");
        }
    };

    return (
        <form onSubmit={handleUpdateTask}>
            <select value={selectedTaskId} onChange={(e) => setSelectedTaskId(e.target.value)} required>
                <option value="">Select Task</option>
                {tasks.map(task => (
                    <option key={task.id} value={task.id}>{task.name}</option>
                ))}
            </select>
            <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <button type="submit">Update Task</button>
        </form>
    );
};

export default UpdateTask;
