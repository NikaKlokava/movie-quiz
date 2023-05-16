import { memo, useEffect } from "react";
import { MyButton } from "../../../shared/components/UI/button/MyButton";
import cl from "../styles/question.module.css";

type Props = {
  data: Question;
  onAnswer: (res: QuestionResult) => void;
  onFinish: (res: GameResult) => void;
};

export const Question = memo(({ data, onAnswer, onFinish }: Props) => {
  const onAnswerClick = (answer: any) => {
    onAnswer(answer.correct ? "passed" : "failed");
  };

  useEffect(() => {
    if (data === undefined) {
      onFinish("finished");
    }
  }, [data, onFinish]);

  return (
    <>
      <div className={cl.question_title}>{data?.question} </div>
      <div
        className={cl.question_picture}
        style={{ backgroundImage: `url(${data?.avatar})` }}
      ></div>
      <div className={cl.answers}>
        {data?.answers.map((answer) => (
          <MyButton
            text={answer.value}
            key={answer.value}
            onClick={() => onAnswerClick(answer)}
          />
        ))}
      </div>
    </>
  );
});
