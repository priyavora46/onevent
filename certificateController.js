const Certificate = require("../models/Certificate");
const Event = require("../models/Event");

// Generate Certificate for Attended Event
exports.generateCertificate = async (req, res) => {
  try {
    const { username, eventId } = req.body;

    // Find event
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // Check if user attended
    const userRegistered = event.participants.some((p) => p.username === username);
    if (!userRegistered) {
      return res.status(400).json({ message: "User not registered for this event" });
    }

    // Save Certificate
    const certificate = new Certificate({ username, eventTitle: event.title });
    await certificate.save();

    res.status(201).json({ message: "Certificate generated successfully", certificate });
  } catch (error) {
    console.error("Certificate generation error:", error);
    res.status(500).json({ message: "Certificate generation failed", error });
  }
};
