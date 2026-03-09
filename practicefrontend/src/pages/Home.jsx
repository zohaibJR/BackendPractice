import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="container">

      <h1>Home Page</h1>
      <p>Welcome to the User Management App</p>

      <button onClick={() => navigate("/adduser")}>
        Add New User
      </button>

    </div>
  );
}

export default Home;