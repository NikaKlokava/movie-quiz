import { useNavigate } from "react-router";
import { MyButton } from "../../../shared/components/button/MyButton";
import { routeNames } from "../../../router";
import cl from "../styles/modal-end-game.module.css";
import { ModalWrapper } from "./ModalWrapper";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useQuizContext } from "../../../shared/context";

type Props = {
  gameResult: GameResult;
  total: number;
  id: string | undefined;
  onRestartPress: () => void;
  correctAnswers: number;
};

export const ModalWindowEndGame = memo(
  ({ gameResult, total, correctAnswers, id, onRestartPress }: Props) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const quiz = useQuizContext();

    const isPlayStopped = gameResult === "stopped";
    const isNoCorrectAnswers = correctAnswers === 0;
    const totalQuestionsNumber = total;
    const statusLabel =
      isPlayStopped || isNoCorrectAnswers
        ? t("game-result.fail")
        : t("game-result.win");
    const descriptionLabel = isPlayStopped
      ? t("play-again.title")
      : `${correctAnswers} / ${totalQuestionsNumber}`;

    const success = Math.round((correctAnswers / total) * 100);
    const handleHomeClick = () => {
      quiz.addQuizSuccess?.({
        id: id,
        success: success,
      });
      localStorage.setItem("quiz", JSON.stringify(quiz));
      navigate(routeNames.Home);
    };

    const handleYesOrNextClick = () => {
      if (isPlayStopped) {
        onRestartPress();
      } else {
        navigate(-1);
      }
    };

    return (
      <ModalWrapper>
        <div
          className={`${cl.end_status_icon} ${
            isPlayStopped || isNoCorrectAnswers
              ? cl.stopped_icon
              : cl.congrat_icon
          }`}
        ></div>
        <div className={cl.end_status}>{statusLabel}</div>
        <div className={cl.end_subscribe}>{descriptionLabel}</div>
        <div className={cl.end_buttons_conainer}>
          <MyButton
            text={isPlayStopped ? t("play-again.no") : t("go-back.to-home")}
            className={cl.modal_buttons}
            onClick={handleHomeClick}
          />
          <MyButton
            text={isPlayStopped ? t("play-again.yes") : t("go-back.to-quizzes")}
            className={cl.modal_buttons}
            onClick={handleYesOrNextClick}
          />
        </div>
      </ModalWrapper>
    );
  }
);
