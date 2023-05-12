import { useCallback, useState } from "react";
import Footer from "../../components/UI/footer/Footer";
import { ModalWindowResult } from "./components/ModalWindowResult";
import { useQuiz } from "./hooks";
import "./styles/questions.css";
import { Question } from "./components";
import { Timer } from "./components/Timer";
import { ModalWindowEndGame } from "./components/ModalWindowEndGame";
import { useParams } from "react-router";

const Quiz = () => {
  const params = useParams();

  console.log(params?.id);
  const questions = useQuiz(params?.id);

  const [result, setResult] = useState<QuestionResult | undefined>();
  const [index, setIndex] = useState(0);
  const [gameResult, setGameResult] = useState<GameResult | undefined>();

  const handleQuestionResults = useCallback((res: QuestionResult) => {
    setResult(res);
  }, []);

  const handleNextClick = useCallback(() => {
    setResult(undefined);

    setIndex((prev) => prev + 1);
  }, []);

  const endTimerTime = useCallback((res: QuestionResult) => {
    setResult(res);
  }, []);

  const handleExitClick = useCallback((end: GameResult) => {
    setGameResult(end);
  }, []);

  const restartQuiz = useCallback(() => {
    setResult(undefined);
    setGameResult(undefined);
    setIndex(0);
  }, []);

  if (questions === undefined) {
    return null;
  }

  return (
    <div className="questions_page">
      <header className="questions_header">
        {!result && !gameResult && (
          <Timer onTimeout={endTimerTime} onStopPress={handleExitClick} /> // выделить кнопку в отдельный компонент
        )}
      </header>
      <main className="questions_content">
        <Question data={questions[index]} onAnswer={handleQuestionResults} />

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
            onRestartPress={restartQuiz}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
