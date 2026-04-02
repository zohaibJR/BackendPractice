import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./Pages/AddUser";
import AddPlayer from "./pages/AddPlayer";
import ViewUsers from "./pages/ViewUsers";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/addplayer" element={<AddPlayer />} />
        <Route path="/viewusers" element={<ViewUsers />} />
      </Routes>

    </div>
  );
}

export default App;