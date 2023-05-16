import { memo } from "react";
import cl from "../styles/stop-quiz.module.css";

type Props = {
  onStop: (res: GameResult) => void;
};

export const StopQuiz = memo(({ onStop }: Props) => {
  const onStopQuizClick = () => {
    onStop("stopped");
  };

  return <div className={cl.stop_quiz} onClick={onStopQuizClick}></div>;
});
