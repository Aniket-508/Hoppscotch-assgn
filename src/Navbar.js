import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-item">
        Table Dashboard
      </Link>
      <Link to="/sensor">Sensor Dashboard</Link>
    </div>
  );
}
