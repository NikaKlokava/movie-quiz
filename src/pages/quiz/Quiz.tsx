import { Footer } from "../../shared/components/footer/Footer";
import { useCallback, useEffect, useState } from "react";
import { ModalWindowResult } from "./components/ModalWindowResult";
import { Question } from "./components";
import { Timer } from "./components/Timer";
import { ModalWindowEndGame } from "./components/ModalWindowEndGame";
import { StopQuiz } from "./components/StopQuiz";
import cl from "./styles/quiz.module.css";
import { useSettingsContext } from "../../shared/context";
import { useLocation, useParams } from "react-router-dom";
import { Loader } from "../../shared/components/loader";
import { useServerData } from "../../shared/hooks";

export const Quiz = () => {
  const settings = useSettingsContext();
  const location = useLocation();
  const params = useParams();

  const [result, setResult] = useState<QuestionResult | undefined>();
  const [index, setIndex] = useState(0);
  const [gameResult, setGameResult] = useState<GameResult | undefined>();
  const [correctAnswers, setCorrect] = useState<number>(0);

  const url = `${process.env.REACT_APP_URL}/questions/${location.state[index]}/${settings.language}.json`;

  const { loadData, isLoading, data } = useServerData(url);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {settings.active && <Timer onTimeout={endTimerTime} />}
          </>
        )}
      </header>
      <main className={cl.quiz_content}>
        {isLoading ? (
          <Loader />
        ) : (
          <Question
            data={data}
            questionNum={location.state[index]}
            onAnswer={handleQuestionResults}
            onFinish={finishQuiz}
          />
        )}
        {result && (
          <ModalWindowResult
            data={data}
            result={result}
            onClose={handleNextClick}
          />
        )}
        {gameResult && (
          <ModalWindowEndGame
            id={params.id}
            gameResult={gameResult}
            total={location.state.length}
            correctAnswers={correctAnswers}
            onRestartPress={restartQuiz}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};
