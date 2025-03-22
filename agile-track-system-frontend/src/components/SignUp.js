import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";
import "./SignUp.css"; 

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("employee"); // Default role
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ name, email, password, role });
            alert("Account created successfully!");
            navigate("/login");
        } catch (error) {
            alert("Error signing up");
        }
    };

    return (
        <div className="signup-container">  
            <form className="signup-form" onSubmit={handleSignUp}>  
                <h2>Create an Account</h2>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="admin">Admin</option>
                    <option value="employee">Employee</option>
                </select>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
