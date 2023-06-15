import { useLocation } from "react-router-dom";
import { database } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Table from "../components/Table";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Result = (props) => {
  const location = useLocation();
  const { score } = location.state || {};
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  const navigate = useNavigate();

  const databaseRef = collection(database, "Leaderboard");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getDocs(databaseRef);
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLeaderBoardData(
      data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
    );
  };

  const handlePlayAgain = () => {
    navigate("/settings");
  };

  const handleEndGame = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Box>
  <h2 className="leaderboard-heading">Leaderboard</h2>
  {localStorage.getItem("Playername") ? <p> Your Score: {score}</p> : null}
  {localStorage.getItem("Playername") ? (
    <Box mb={5}>
      <Button variant="contained" color="primary" onClick={handlePlayAgain} sx={{ marginRight: '10px' }}>
        Play again
      </Button>
      <Button variant="contained" color="secondary" onClick={handleEndGame}>
        End game
      </Button>
    </Box>
  ) : null}
  <div className="leaderboard-container">
    <Table leaderBoardData={leaderBoardData} />
  </div>
  
</Box>
  );
};

export default Result;
