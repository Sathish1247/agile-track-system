import React, { useState, useEffect } from "react";
import { assignTask, fetchScrums } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./AssignTask.css";

const AssignTask = () => {
    const [scrumId, setScrumId] = useState("");
    const [taskName, setTaskName] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [scrums, setScrums] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadScrums = async () => {
            try {
                const response = await fetchScrums();
                setScrums(response.data);
            } catch (error) {
                console.error("Error fetching scrums:", error);
            }
        };
        loadScrums();
    }, []);

    const handleAssignTask = async (e) => {
        e.preventDefault();

        const taskData = {
            description: taskName,  
            status: "Pending",  
            scrum: { id: Number(scrumId) },  
            assignedTo: { id: Number(employeeId) }  
        };

        console.log("Assigning Task:", taskData);

        try {
            await assignTask(taskData);
            alert("Task assigned successfully!");
            navigate("/admin-dashboard");
        } catch (error) {
            console.error("Error assigning task:", error.response?.data || error.message);
            alert("Error assigning task. Please try again.");
        }
    };

    return (
        <div className="assign-task-page">
            <div className="assign-task-container">
                <h2>Assign Task</h2>
                <form onSubmit={handleAssignTask}>
                    <select value={scrumId} onChange={(e) => setScrumId(e.target.value)} required>
                        <option value="">Select Scrum</option>
                        {scrums.map((scrum) => (
                            <option key={scrum.id} value={scrum.id}>
                                {scrum.name}
                            </option>
                        ))}
                    </select>
                    <input 
                        type="text" 
                        placeholder="Task Name" 
                        value={taskName} 
                        onChange={(e) => setTaskName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="Employee ID" 
                        value={employeeId} 
                        onChange={(e) => setEmployeeId(e.target.value)} 
                        required 
                    />
                    <button type="submit">Assign Task</button>
                </form>
            </div>
        </div>
    );
};

export default AssignTask;
