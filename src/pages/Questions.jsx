import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { database } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { decode } from "html-entities";
import { Box, Button, CircularProgress } from "@mui/material";

const Questions = () => {
  const location = useLocation();
  const { category, difficulty, type, noOfQuestion, playerName } = location.state || {};
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const databaseRef = collection(database, "Leaderboard"); //connection to the db

  const navigate = useNavigate();

  useEffect(() => {
    const QUESTION_URL = `https://opentdb.com/api.php?amount=${noOfQuestion}&category=${category}&difficulty=${difficulty}&type=${type}`;

    const fetchQuestions = () => {
      axios
        .get(QUESTION_URL)
        .then((response) => {
          // console.log(response)
          const fetchedQuestions = response.data.results;
          setQuestions(fetchedQuestions);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    };
    fetchQuestions();
  }, [category, difficulty, type, noOfQuestion]);

  const handleAnswerClick = (isCorrect) => { //checks if the button clicked matches the correct ans and returns boolean
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex === questions.length - 1) { //when question finishes
      const finalScore = isCorrect ? score + 1 : score; // Update the score to include the last question's answer
      addDoc(databaseRef, { // addDoc: adds new doc to Firestore
        playerName: playerName,
        category: category,
        difficulty: difficulty,
        noOfQuestion: noOfQuestion,
        type: type,
        score: finalScore,
      }).then(() => {
        navigate("/result", {
          state: {
            score: finalScore,
            noOfQuestion: noOfQuestion
          },
        });
      });
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };
  
  // console.log(questions);
  if (questions.length === 0) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const shuffledAnswers = [ // store correct and incorrect and and shuffle
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort(() => Math.random() - 0.5);

  return (
    <Box>
      <div className="score-keeper">
        <h2>
          Your Score: {score} / {questions.length}
        </h2>
      </div>
      <div className="question-box">
        <h2><strong className="question-strong">Qus. {currentQuestionIndex + 1}:</strong> {decode(currentQuestion.question)}</h2>
      </div>
      <Box className="ans-button-grid">
        {shuffledAnswers.map((answer, index) => (
          <Button
            key={index}
            onClick={() =>
              handleAnswerClick(answer === currentQuestion.correct_answer)
            }
            variant="contained"
            color="success"
            sx={{ width: "300px", marginBottom: "16px" }}
          >
            {decode(answer)}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Questions;
