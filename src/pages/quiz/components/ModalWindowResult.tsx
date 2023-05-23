import { MyButton } from "../../../shared/components/button/MyButton";
import cl from "../styles/modal-window.module.css";
import { memo, useMemo } from "react";
import { ModalWrapper } from "./ModalWrapper";

type Props = {
  data: Question;
  result: QuestionResult;
  onClose: () => void;
};

export const ModalWindowResult = memo(({ data, result, onClose }: Props) => {
  const { avatar, correctAnswer, correct } = useMemo(
    () => ({
      avatar: data.avatar,
      correctAnswer: data.answers.find((answer) => answer.correct),
      correct: result === "passed",
    }),
    [data.answers, data.avatar, result]
  );

  return (
    <ModalWrapper>
      <div
        className={`${cl.correct_actor_avatar} ${correct ? cl.green : cl.red}`}
        style={{
          backgroundImage: `url(${avatar})`,
        }}
      >
        <div
          className={`${cl.answer_status_icon} ${
            correct ? cl.correct : cl.incorrect
          }`}
        ></div>
      </div>
      {correctAnswer && (
        <p className={cl.correct_actor_name}>{correctAnswer.value}</p>
      )}
      <MyButton
        text={"next"}
        style={{ color: "black", borderColor: "grey" }}
        onClick={onClose}
      />
    </ModalWrapper>
  );
});
