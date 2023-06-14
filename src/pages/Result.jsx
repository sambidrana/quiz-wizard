import { useLocation } from "react-router-dom";
import { database } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Table from '../components/Table'
const Result = (props) => {
  const location = useLocation();
  const { score } = location.state || {};
  const [leaderBoardData, setLeaderBoardData] = useState([])

  const databaseRef = collection(database, 'Leaderboard')

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await getDocs(databaseRef)
    console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    setLeaderBoardData(data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    .sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
    
    )
  }

  return (
    <div>
      <h1>Results</h1>
      <p>Score: {score}</p>
      <h2>Leaderboard</h2>
      <Table leaderBoardData={leaderBoardData} />
    </div>
  );
};

export default Result;
