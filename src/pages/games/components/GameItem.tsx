import { memo, useEffect } from "react";
import { routeNames } from "../../../router";
import { useServerData } from "../../../shared/hooks";
import classes from "../styles/game_item.module.css";
import { Loader } from "../../../shared/components/loader";
import { useTranslation } from "react-i18next";
import { CardItem } from "../../../shared/components/card_item";

type Props = {
  id: number;
  index: number;
};

export const GameItem = memo(({ id, index }: Props) => {
  const { t } = useTranslation();
  const quizSuccess = JSON.parse(localStorage.getItem("quiz")!)?.data;
  const url = `${process.env.REACT_APP_URL}/games/${id}.json`;

  const { loadData, isLoading, data } = useServerData(url);
  const { avatar, questions } = data;

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categoryItemSuccess = quizSuccess?.find(
    (obj: { id: string; success: number }) => {
      if (+obj.id === id) {
        return obj.success;
      }
      return 0;
    }
  );

  return (
    <div className={classes.item}>
      {isLoading ? (
        <Loader />
      ) : (
        <CardItem
          id={0}
          name={t("games.name", { count: index })}
          avatar={avatar}
          success={categoryItemSuccess ? `${categoryItemSuccess.success}%` : ``}
          route={routeNames.Quiz}
          questions={questions}
        />
      )}
    </div>
  );
});
