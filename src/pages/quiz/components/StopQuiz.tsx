import { useCallback } from "react";
import cl from "../styles/stop-quiz.module.css";

type Props = {
  onStop: (res: GameResult) => void;
};

export const StopQuiz = ({ onStop }: Props) => {
  const onStopQuizClick = useCallback(() => {
    onStop("stopped");
  }, [onStop]);
  return <div className={cl.stop_quiz} onClick={onStopQuizClick}></div>;
};
