import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({ email, password });
            localStorage.setItem("user", JSON.stringify(response.data));
            if (response.data.role === "admin") {
                navigate("/admin-dashboard");
            } else {
                navigate("/employee-dashboard");
            }
        } catch (error) {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="login-container">  
            <form className="login-form" onSubmit={handleLogin}>  
                <h2>Login</h2>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
