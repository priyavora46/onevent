const Event = require("../models/Event");

// Register for Event
exports.registerForEvent = async (req, res) => {
  try {
    console.log("Incoming request:", req.body); // Debugging

    const { eventId, username, fullname, study } = req.body;

    if (!eventId || !username || !fullname || !study) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find Event
    const event = await Event.findById(eventId);
    if (!event) {
      console.log("Event not found:", eventId);
      return res.status(404).json({ message: "Event not found" });
    }

    // Add Participant
    event.participants.push({ username, fullname, study });

    await event.save();
    console.log("Participant added:", { username, fullname, study });

    res.status(201).json({ message: "Registered successfully", event });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Registration failed", error });
  }
};
