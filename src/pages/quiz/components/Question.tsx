import { memo, useCallback } from "react";
import MyButton from "../../../components/UI/button/MyButton";

type Props = {
  data: Question;
  onAnswer: (res: QuestionResult) => void;
};

export const Question = memo(({ data, onAnswer }: Props) => {
  const onAnswerClick = useCallback(
    (answer: any) => {
      onAnswer(answer.correct ? "passed" : "failed");
    },
    [onAnswer]
  );
  
  return (
    <>
      <div className="question_title">{data.question} </div>
      <div
        className="question_picture"
        style={{ backgroundImage: `url(${data.avatar})` }}
      ></div>
      <div className="answers">
        {data.answers.map((answer) => (
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
