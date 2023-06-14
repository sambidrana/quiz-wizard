import { Box, TextField, Button } from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  console.log(user);

  const _handleSubmit = (e) => {
    e.preventDefault();
    navigate("/settings");
    console.log("Submitted username:", user);
  };

  const getPlayerName = (value) => {
    setUser(value);
    localStorage.setItem("Playername", value);
  };

  return (
    <Box>
      <form onSubmit={_handleSubmit} className="user-form">
        <TextField
          value={user}
          onChange={(e) => getPlayerName(e.target.value)}
          label="Enter Player Name"
          variant="standard"
          color="secondary"
          sx={{ width: '300px'}}
          InputProps={{
            sx: {
              fontSize: '30px',
            },
          }}

        />
        <Box mt={5}>
          <Button type="submit" color="secondary" size="large">
            Enter
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UserDetails;
