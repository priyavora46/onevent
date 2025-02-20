import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import EventDashboard from "./Pages/EventDashboard";
import Leaderboard from "./Pages/Leaderboard";
import Certificate from "./Pages/Certificate";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import OrganizeEvent from "./Pages/OrganizeEvent";
import Registration from "./Pages/Registration"; // Corrected import

// Import Bootstrap (Make sure it's installed)
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventDashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/organize" element={<OrganizeEvent />} />
          <Route path="/register" element={<Registration />} /> {/* Fixed the closing tag */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
