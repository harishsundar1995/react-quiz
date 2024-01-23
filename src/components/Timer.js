import React, { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

const Timer = () => {
  const { dispatch, secondsRemaining } = useQuiz();
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearTimeout(timerId);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default Timer;
