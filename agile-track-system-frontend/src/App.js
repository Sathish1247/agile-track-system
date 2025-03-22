import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage"; // ✅ Import Welcome Page
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/AdminDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";
import CreateScrum from "./components/CreateScrum";
import AssignTask from "./components/AssignTask";
import UpdateTask from "./components/UpdateTask";
import Logout from "./components/Logout";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />  {/* ✅ Welcome Page is now the default */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
                <Route path="/create-scrum" element={<CreateScrum />} />
                <Route path="/assign-task" element={<AssignTask />} />
                <Route path="/update-task" element={<UpdateTask />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
    );
};

export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WelcomePage from "./components/WelcomePage";

// console.log("WelcomePage Component:", WelcomePage);  // Debug

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<WelcomePage />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;