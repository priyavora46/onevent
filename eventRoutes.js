import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// Register for an event
router.post("/register", async (req, res) => {
  try {
    const { name, phone, eventId } = req.body;

    if (!name || !phone || !eventId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newRegistration = new Event({ name, phone, eventId });
    await newRegistration.save();

    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Get all registrations
router.get("/registrations", async (req, res) => {
  try {
    const registrations = await Event.find();
    res.json(registrations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
