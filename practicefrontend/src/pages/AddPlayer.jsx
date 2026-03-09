import React, { useState } from 'react'
import axios from "axios"; 

function AddPlayer() {

    const [name, setName] = useState("");
    const [country, setCountry] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try{
          const res = await axios.post(
            "http://localhost:5000/api/players/addplayer",
            {
              name,country
            }
          );

          alert(res.data.message);

          setName("");
          setCountry("");

        }catch (error) { // FIX: added error parameter

      console.log(error);

      alert("Error adding player");

    }
    };

    
  return (
    <div className="container">

      <h1>Add Player</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter Country"
          value={country}
          onChange={(e)=>setCountry(e.target.value)}
          required
        />

        <button type="submit">
          Add Player
        </button>

      </form>

    </div>
  );
}

export default AddPlayer
