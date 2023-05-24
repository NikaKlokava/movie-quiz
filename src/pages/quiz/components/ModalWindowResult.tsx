import { MyButton } from "../../../shared/components/button/MyButton";
import cl from "../styles/modal-window.module.css";
import { memo, useMemo } from "react";
import { ModalWrapper } from "./ModalWrapper";
import { useTranslation } from "react-i18next";

type Props = {
  data: Question;
  result: QuestionResult;
  onClose: () => void;
};

export const ModalWindowResult = memo(({ data, result, onClose }: Props) => {
  const { t} = useTranslation()
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
        text={t("next-question")}
        style={{ color: "black", borderColor: "grey" }}
        onClick={onClose}
      />
    </ModalWrapper>
  );
});
