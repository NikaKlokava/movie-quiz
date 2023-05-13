import { useCallback, useState } from "react";
import Footer from "../../components/UI/footer/Footer";
import { ModalWindowResult } from "./components/ModalWindowResult";
import { useQuiz } from "./hooks";
import "./styles/quiz.css";
import { Question } from "./components";
import { Timer } from "./components/Timer";
import { ModalWindowEndGame } from "./components/ModalWindowEndGame";
import { useParams } from "react-router";
import { StopQuiz } from "./components/StopQuiz";

const Quiz = () => {
  const params = useParams();
  const questions = useQuiz(params?.id);

  const [result, setResult] = useState<QuestionResult | undefined>();
  const [index, setIndex] = useState(0);
  const [gameResult, setGameResult] = useState<GameResult | undefined>();
  const [correctAnswers, setCorrect] = useState(0);

  const handleQuestionResults = useCallback((res: QuestionResult) => {
    setCorrect(res === "passed" ? (prev) => prev + 1 : (prev) => prev);
    setResult(res);
  }, []);

  const handleNextClick = useCallback(() => {
    setResult(undefined);

    setIndex((prev) => prev + 1);
  }, []);

  const endTimerTime = useCallback((res: QuestionResult) => {
    setResult(res);
  }, []);

  const handleStopQuiz = useCallback((res: GameResult) => {
    setGameResult(res);
  }, []);

  const restartQuiz = useCallback(() => {
    setResult(undefined);
    setGameResult(undefined);
    setIndex(0);
  }, []);

  const finishQuiz = useCallback((res: GameResult) => {
    setGameResult(res);
  }, []);

  // if (questions === undefined) {
  //   return null;
  // }

  return (
    <div className="quiz_page">
      <header className="quiz_header">
        {!result && !gameResult && (
          <>
            <StopQuiz onStop={handleStopQuiz} />
            <Timer onTimeout={endTimerTime} />
          </>
        )}
      </header>
      <main className="quiz_content">
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

export default Quiz;
