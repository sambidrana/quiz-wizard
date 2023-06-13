import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const _handleSubmit = (e) => {
    e.preventDefault();
    navigate("/settings");
    console.log("Submitted username:", user);
  };

  const _handleUserChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <form onSubmit={_handleSubmit}>
      <label htmlFor="username">
        Username <br /> <br />
      </label>

      <input
        type="text"
        id="username"
        placeholder="Eg: John Wick"
        onChange={_handleUserChange}
      />
      <div>
        <br />
        <button>Enter</button>
      </div>
    </form>
  );
};

export default UserDetails;
