import React, { useState } from "react";
import { createScrum } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./CreateScrum.css";

const CreateScrum = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleCreateScrum = async (e) => {
        e.preventDefault();
        console.log("Creating Scrum with name:", name); // ✅ Debug Log
        try {
            await createScrum({ name });
            alert("Scrum created successfully!");
            navigate("/admin-dashboard");
        } catch (error) {
            console.error("Error creating Scrum:", error);
        }
    };

    return (
        <div className="create-scrum-page">
            <div className="create-scrum-container">
                <h2>Create Scrum</h2>
                <form onSubmit={handleCreateScrum}>
                    <input 
                        type="text" 
                        placeholder="Scrum Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <button type="submit">Create Scrum</button>
                </form>
            </div>
        </div>
    );
};

export default CreateScrum;
