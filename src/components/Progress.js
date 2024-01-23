import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const Progress = () => {
  const { index, numQuestions, maxPossiblePoints, points, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index}</strong>/ {numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;