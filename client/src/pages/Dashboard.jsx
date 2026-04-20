import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../api.js";
import Navbar from "../components/Navbar.jsx";

function Dashboard() {
  const navigate = useNavigate();
  const savedUser = JSON.parse(localStorage.getItem("user") || "null");
  const [user, setUser] = useState(savedUser);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await apiRequest("/api/user/profile");
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setError("Session expired. Please login again.");
        setTimeout(() => navigate("/login"), 1000);
      }
    };

    loadProfile();
  }, [navigate]);

  return (
    <div className="dashboard-page">
      <Navbar />

      <main className="dashboard">
        {error && <div className="alert error">{error}</div>}

        <section className="welcome-panel">
          <p className="eyebrow">Dashboard</p>
          <h1>Hello, {user?.name || "there"}</h1>
          <p className="muted">
            Your protected profile was loaded using a JWT token.
          </p>
        </section>

        <section className="profile-box">
          <h2>Your Profile</h2>
          <p>
            <strong>Name:</strong> {user?.name || "Loading..."}
          </p>
          <p>
            <strong>Email:</strong> {user?.email || "Loading..."}
          </p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
