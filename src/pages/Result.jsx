import { useLocation } from "react-router-dom";

const Result = (props) => {
  const location = useLocation();
  const { score } = location.state || {};

  return (
    <div>
      <h1>Results</h1>
      <p>Score: {score}</p>
    </div>
  );
};

export default Result;
