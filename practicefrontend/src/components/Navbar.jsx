import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">

      <h2>User App</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/adduser">Add User</Link>
        <Link to="/addplayer">Add Player</Link>
      </div>

    </div>
  );
}

export default Navbar;