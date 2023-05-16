import { Footer } from "../../shared/components/UI/footer/Footer";
import { useCallback, useState } from "react";
import { ModalWindowResult } from "./components/ModalWindowResult";
import { useQuiz } from "./hooks";
import { Question } from "./components";
import { Timer } from "./components/Timer";
import { ModalWindowEndGame } from "./components/ModalWindowEndGame";
import { useParams } from "react-router";
import { StopQuiz } from "./components/StopQuiz";
import cl from "./styles/quiz.module.css";

export const Quiz = () => {
  const params = useParams();
  const questions = useQuiz(params?.id);

  const [result, setResult] = useState<QuestionResult | undefined>();
  const [index, setIndex] = useState(0);
  const [gameResult, setGameResult] = useState<GameResult | undefined>();
  const [correctAnswers, setCorrect] = useState(0);

  // need useCallback
  const handleQuestionResults = useCallback((res: QuestionResult) => {
    setCorrect(res === "passed" ? (prev) => prev + 1 : (prev) => prev);
    setResult(res);
  }, []);

  const handleNextClick = () => {
    setResult(undefined);
    setIndex((prev) => prev + 1);
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
    setIndex(0);
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
            <Timer onTimeout={endTimerTime} />
          </>
        )}
      </header>
      <main className={cl.quiz_content}>
        <Question
          data={questions[index]}
          onAnswer={handleQuestionResults}
          onFinish={finishQuiz}
        />

        {result && (
          <ModalWindowResult
            data={questions[index]}
            result={result}
            onClose={handleNextClick}
          />
        )}
        {gameResult && (
          <ModalWindowEndGame
            gameResult={gameResult}
            data={questions}
            correctAnswers={correctAnswers}
            onRestartPress={restartQuiz}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};
