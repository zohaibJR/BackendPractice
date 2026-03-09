import { useState } from "react";
import axios from "axios"; // FIX: axios import

function AddUser() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/users/adduser",
        { name, email }
      );

      alert(res.data.message);

      setName("");
      setEmail("");

    } catch (error) { // FIX: added error parameter

      console.log(error);

      alert("Error adding user");

    }

  };

  return (
    <div className="container">

      <h1>Add User</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">
          Add User
        </button>

      </form>

    </div>
  );
}

export default AddUser;