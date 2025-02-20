import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OrganizeEvent = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    image: ""
  });

  // Check if the user is logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
      alert("You must be logged in to organize an event.");
      navigate("/login");
    } else {
      setUser(JSON.parse(loggedInUser)); // Set user state
    }
  }, [navigate]);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to create an event.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/events", {
        ...eventData,
        organizer: user.email, // Store organizer email in the database
      });
      console.log("Event Created:", response.data);
      alert("Event Created Successfully!");
      navigate("/events"); // Redirect to events page after submission
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary">Organize an Event</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Event Title</label>
          <input type="text" className="form-control" name="title" value={eventData.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" name="date" value={eventData.date} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" className="form-control" name="location" value={eventData.location} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={eventData.description} onChange={handleChange} required></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input type="text" className="form-control" name="image" value={eventData.image} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success">Create Event</button>
      </form>
    </div>
  );
};

export default OrganizeEvent;
