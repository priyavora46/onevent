import React, { useState } from "react";
import "./auth.css"; // Import the CSS file

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        contact: "",
        fullName: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Signup failed");
            }

            alert("Signup successful!");
        } catch (error) {
            alert("Signup failed: " + error.message);
            console.error("Signup error:", error);
        }
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <input type="text" name="username" onChange={handleChange} placeholder="Username" required />
                <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
                <input type="text" name="contact" onChange={handleChange} placeholder="Contact" required />
                <input type="text" name="fullName" onChange={handleChange} placeholder="Full Name" required />
                <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
                <button type="submit">Signup</button>
            </form>

            <p className="auth-footer">
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    );
};

export default Signup;
