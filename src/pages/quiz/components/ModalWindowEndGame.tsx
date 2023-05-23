import { useNavigate } from "react-router";
import { MyButton } from "../../../shared/components/button/MyButton";
import { routeNames } from "../../../router";
import cl from "../styles/modal-end-game.module.css";
import { ModalWrapper } from "./ModalWrapper";
import { memo } from "react";

type Props = {
  gameResult: GameResult;
  total: number;
  onRestartPress: () => void;
  correctAnswers: number;
};

export const ModalWindowEndGame = memo(
  ({ gameResult, total, correctAnswers, onRestartPress }: Props) => {
    const navigate = useNavigate();

    const isPlayStopped = gameResult === "stopped";
    const isNoCorrectAnswers = correctAnswers === 0;
    const totalQuestionsNumber = total;
    const statusLabel =
      isPlayStopped || isNoCorrectAnswers ? "Game over" : "Congratulations!";
    const descriptionLabel = isPlayStopped
      ? "Play again?"
      : `${correctAnswers} / ${totalQuestionsNumber}`;

    const handleHomeClick = () => {
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
            text={isPlayStopped ? " No" : "Home"}
            className={cl.modal_buttons}
            onClick={handleHomeClick}
          />
          <MyButton
            text={isPlayStopped ? "Yes" : "List of quizzes"}
            className={cl.modal_buttons}
            onClick={handleYesOrNextClick}
          />
        </div>
      </ModalWrapper>
    );
  }
);
