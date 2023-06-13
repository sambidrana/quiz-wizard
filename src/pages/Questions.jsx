import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Questions = () => {
  const location = useLocation();
  const { category, difficulty, type, noOfQuestion } = location.state || {};
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  const navigate = useNavigate();

  useEffect(() => {
    const QUESTION_URL = `https://opentdb.com/api.php?amount=${noOfQuestion}&category=${category}&difficulty=${difficulty}&type=${type}`;

    const fetchQuestions = async () => {
      try {
        const response = await axios.get(QUESTION_URL);
        const fetchedQuestions = response.data.results;
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchQuestions();
    
  }, [category, difficulty, type, noOfQuestion]);

  
  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
        const finalScore = isCorrect ? score + 1 : score; // Update the score to include the last question's answer
        navigate("/result", {
          state: {
            score: finalScore,
          },
    });
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const shuffledAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort(() => Math.random() - 0.5);


  return (
    <div>
      <h1>Questions</h1>
      <h3>Question: {currentQuestion.question}</h3>
      <div>
        {shuffledAnswers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswerClick(answer === currentQuestion.correct_answer)}>
            {answer}
          </button>
        ))}
      </div>
      <p>Score: {score}/{questions.length}</p>
    </div>
  );
};

export default Questions;
