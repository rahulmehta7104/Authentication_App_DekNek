import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/dashboard" className="brand">
        Auth App
      </Link>
      <button className="link-button" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
