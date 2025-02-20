import { useState } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

const Registration = ({ show, handleClose, eventId }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/events/register", {
        name,
        phone,
        eventId, // Send event ID to backend
      });

      setMessage(response.data.message);
      setTimeout(() => handleClose(), 2000); // Close modal after success
    } catch (error) {
      setMessage("Registration failed. Try again.");
      console.error(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register for Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" />
          </Form.Group>
          <Button variant="success" onClick={handleRegister}>Register</Button>
        </Form>
        {message && <p className="mt-3 text-success">{message}</p>}
      </Modal.Body>
    </Modal>
  );
};

export default Registration;
