import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectField from "../components/SelectField";
import FieldText from "../components/FieldText";
import { CircularProgress, Button } from "@mui/material";
import { Box } from "@mui/system";

const Settings = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [noOfQuestion, setNoOfQuestion] = useState("10");

  const CATEGORY_URL = `https://opentdb.com/api_category.php`;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(CATEGORY_URL)
        .then((response) => {
          // console.log(response.data.trivia_categories);
          setCategories(response.data.trivia_categories);
          setPlayerName(localStorage.getItem("Playername"));
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error:", error);
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  // console.log(category, difficulty, type, noOfQuestion);

  const difficultyOpt = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOpt = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True / False" },
  ];

  const hadleFormSubmit = (e) => {
    e.preventDefault();
    console.log(category, difficulty, type, noOfQuestion);
    navigate("/questions", {
      state: {
        category: category,
        difficulty: difficulty,
        type: type,
        noOfQuestion: noOfQuestion,
        playerName: playerName,
      },
    });
  };

  return (
    <div>
      {playerName ? <h1>Welcome, {playerName}</h1> : <CircularProgress />}
      <div className="settings-container">
        <form onSubmit={hadleFormSubmit}>
          <SelectField
            name="Category"
            categories={categories}
            onChange={setCategory}
          />
          <SelectField
            name="Difficulty"
            categories={difficultyOpt}
            onChange={setDifficulty}
          />
          <SelectField name="Type" categories={typeOpt} onChange={setType} />
          <FieldText name="No of Questions" onChange={setNoOfQuestion} />

          <Box mt={5}>
            <Button type="submit" variant="contained" sx={{ bgcolor: "green" }}>
              {" "}
              Get Started{" "}
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Settings;
