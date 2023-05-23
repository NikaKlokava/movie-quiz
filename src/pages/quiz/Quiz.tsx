import { Footer } from "../../shared/components/UI/footer/Footer";
import { memo, useCallback, useEffect, useState } from "react";
import { ModalWindowResult } from "./components/ModalWindowResult";
import { useQuiz } from "./hooks";
import { Question } from "./components";
import { Timer } from "./components/Timer";
import { ModalWindowEndGame } from "./components/ModalWindowEndGame";
import { StopQuiz } from "./components/StopQuiz";
import cl from "./styles/quiz.module.css";
import { useSettingsContext } from "../../shared/context";
import { useLocation } from "react-router-dom";

export const Quiz = memo(() => {
  const settings = useSettingsContext();
  const location = useLocation();
  const question = useQuiz(location.state[0]);

  const [result, setResult] = useState<QuestionResult | undefined>();
  const [index, setIndex] = useState(location.state[0]);
  const [gameResult, setGameResult] = useState<GameResult | undefined>();
  const [correctAnswers, setCorrect] = useState(0);

  useEffect(() => {
    question.loadData(index);
  }, [index]);

  // need useCallback
  const handleQuestionResults = useCallback((res: QuestionResult) => {
    setCorrect(res === "passed" ? (prev) => prev + 1 : (prev) => prev);
    setResult(res);
  }, []);

  const handleNextClick = () => {
    setResult(undefined);
    setIndex((prev: number) => prev + 1);
  };

  const endTimerTime = (res: QuestionResult) => {
    setResult(res);
  };

  const handleStopQuiz = (res: GameResult) => {
    setGameResult(res);
  };

  const restartQuiz = () => {
    setResult(undefined);
    setGameResult(undefined);
    setIndex(location.state[0]);
  };

  //need useCallback
  const finishQuiz = useCallback((res: GameResult) => {
    setGameResult(res);
  }, []);

  return (
    <div className={cl.quiz_page}>
      <header className={cl.quiz_header}>
        {!result && !gameResult && (
          <>
            <StopQuiz onStop={handleStopQuiz} />
            {settings.active && <Timer onTimeout={endTimerTime} />}
          </>
        )}
      </header>
      <main className={cl.quiz_content}>
        {!question.loading && (
          <Question
            data={question.data}
            onAnswer={handleQuestionResults}
            onFinish={finishQuiz}
          />
        )}
        {result && (
          <ModalWindowResult
            data={question.data}
            result={result}
            onClose={handleNextClick}
          />
        )}
        {gameResult && (
          <ModalWindowEndGame
            gameResult={gameResult}
            data={question.data}
            correctAnswers={correctAnswers}
            onRestartPress={restartQuiz}
          />
        )}
      </main>
      <Footer />
    </div>
  );
});
