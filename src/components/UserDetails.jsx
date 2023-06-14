import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  console.log(user)

  const _handleSubmit = (e) => {
    e.preventDefault();
    navigate("/settings");
    console.log("Submitted username:", user);
  };

  const getPlayerName = (value) => {
        setUser(value)
        localStorage.setItem('Playername', value)
  }

  return (
    <form onSubmit={_handleSubmit}>
      <label htmlFor="username">
        Username <br /> <br />
      </label>

      <input
        type="text"
        id="username"
        value={user}
        placeholder="Eg: John Wick"
        onChange={(e) => getPlayerName(e.target.value)}
      />
      <div>
        <br />
        <button>Enter</button>
      </div>
    </form>
  );
};

export default UserDetails;
