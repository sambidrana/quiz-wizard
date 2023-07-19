import { useLocation } from "react-router-dom";
import { database } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Table from "../components/Table";
import { Box, Button, CircularProgress, } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Result = () => {
  const location = useLocation();
  const { score, noOfQuestion } = location.state || {}; //default value is an empyt object. Firefox returned error without it.
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  const databaseRef = collection(database, "Leaderboard"); //referencing to the Leaderboard collection in Firebase

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getDocs(databaseRef);
    const sortedData = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .sort((a, b) => parseFloat(b.score) - parseFloat(a.score)); // Sort leaderboard according to highest score
    const top10Scores = sortedData.slice(0, 10); // Retrieve top 10 scores
    setLeaderBoardData(top10Scores);
    setLoading(false);
  };

  const handlePlayAgain = () => {
    navigate("/settings");
  };

  const handleEndGame = () => {
    localStorage.clear();
    navigate("/");
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <h2 className="leaderboard-heading">Leaderboard</h2>
  {localStorage.getItem("Playername") && noOfQuestion ? <h2 className="display-result"> {localStorage.getItem("Playername")} you answered {score} out of {noOfQuestion} questions correctly</h2> : null}
  {localStorage.getItem("Playername") ? (
    <Box mb={4}>
      <Button className="result-btn" variant="contained" color="primary" onClick={handlePlayAgain} sx={{ marginRight: '10px' }}>
        Play again
      </Button>
      <Button className="result-btn" variant="contained" color="secondary" onClick={handleEndGame}>
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
