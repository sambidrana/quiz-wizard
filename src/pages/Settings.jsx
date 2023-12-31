import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectField from "../components/SelectField";
import FieldText from "../components/FieldText";
import { CircularProgress, Button } from "@mui/material";
import { Box } from "@mui/system";

const Settings = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]); // To list out categories in select field
  const [loading, setLoading] = useState(true);
  const [playerName, setPlayerName] = useState("");

  const [category, setCategory] = useState(""); // To get the category id required to make the api call
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [noOfQuestion, setNoOfQuestion] = useState("10");

  const CATEGORY_URL = `https://opentdb.com/api_category.php`; //Gives a list of categories

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(CATEGORY_URL)
        .then((response) => {
          setCategories(response.data.trivia_categories);
          setPlayerName(localStorage.getItem("Playername")); //To get the player info from local Storage
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error:", error);
          setLoading(false);
        });
    };

    fetchData();
  }, []);


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
      {playerName ? <h1 className="settings-welcome">Welcome, {playerName}</h1> : <CircularProgress />}
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
            <Button type="submit" 
            className="questions-btn"
            variant="contained" sx={{ bgcolor: "green" }}>
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
