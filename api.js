import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Backend URL

// User Signup
export const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users/signup`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// User Login
export const login = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, loginData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Register for Event
export const registerForEvent = async (eventData, token) => {
    try {
        const response = await axios.post(`${API_URL}/events/register`, eventData, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Get Live Scoreboard
export const getLeaderboard = async () => {
    try {
        const response = await axios.get(`${API_URL}/leaderboard`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Download Certificate
export const downloadCertificate = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/certificate/download`, {
            headers: { Authorization: `Bearer ${token}` },
            responseType: "blob",
        });
        return response;
    } catch (error) {
        throw error.response.data;
    }
};
