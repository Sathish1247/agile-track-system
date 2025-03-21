import axios from "axios";

const API_URL = "http://localhost:8080"; // Update if backend is running on a different port

export const registerUser = async (userData) => {
    return await axios.post(`${API_URL}/auth/signup`, userData);
};

export const loginUser = async (userData) => {
    return await axios.post(`${API_URL}/auth/login`, userData);
};

export const fetchScrums = async () => {
    return await axios.get(`${API_URL}/scrum/all`);
};

export const createScrum = async (scrumData) => {
    return await axios.post(`${API_URL}/scrum/create`, scrumData);
};

export const assignTask = async (taskData) => {
    console.log("Assigning Task:", taskData);  // Debugging Log
    return await axios.post(`${API_URL}/task/assign`, taskData);
};

// ✅ Fixed updateTask function (Send Task ID in the body instead of URL)
// export const updateTask = async (taskId, status) => {
//     try {
//         console.log(`Updating task ID: ${taskId} to status: ${status}`);
//         const response = await axios.put(`${API_URL}/task/update`, { 
//             id: taskId,   // ✅ Send ID in request body
//             status: status 
//         });
//         console.log("Task updated successfully:", response.data);
//         return response.data;
//     } catch (error) {
//         console.error("Error updating task:", error.response?.data || error.message);
//         throw error;
//     }
// };

export const updateTask = async (taskId, status) => {
    try {
        console.log(`Updating Task ID: ${taskId} to Status: ${status}`);
        const response = await axios.put(`${API_URL}/task/update/${taskId}`, { status });
        return response.data;
    } catch (error) {
        console.error("Error updating task:", error.response?.data || error.message);
        throw error;
    }
};

// ✅ Fetch user-specific tasks
export const fetchUserTasks = async (userId) => {
    console.log("Fetching tasks for user:", userId);
    try {
        const response = await axios.get(`${API_URL}/task/user/${userId}`);
        console.log("Tasks fetched:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks:", error.response?.data || error.message);
        throw error;
    }
};

export const logoutUser = () => {
    localStorage.removeItem("user");
};
