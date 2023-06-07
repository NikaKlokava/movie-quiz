import { memo, useEffect } from "react";
import { useNavigate } from "react-router";
import { routeNames } from "../../../router";
import { useServerData } from "../../../shared/hooks";
import classes from "../styles/category_item.module.css";
import { Loader } from "../../../shared/components/loader";
import { useTranslation } from "react-i18next";

type Props = {
  id: number;
  index: number;
};

export const CategoryItem = memo(({ id, index }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const quizSuccess = JSON.parse(localStorage.getItem("quiz")!)?.data;
  const url = `${process.env.REACT_APP_URL}/games/${id}.json`;

  const { loadData, isLoading, data } = useServerData(url);
  const { avatar, questions } = data;

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePlayClick = () => {
    navigate(`${routeNames.Quiz}/${id}`, { state: questions });
  };

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
        <>
          <div className={classes.item_title}>
            {t("games.name", { count: index })}
          </div>
          <div className={classes.item_status}>
            {categoryItemSuccess ? `${categoryItemSuccess.success}%` : ``}
          </div>
          <div
            className={classes.item_avatar}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className={classes.item_play} onClick={handlePlayClick}>
            <div
              className={
                categoryItemSuccess
                  ? classes.item_replay_icon
                  : classes.item_play_icon
              }
            ></div>
            <div className={classes.item_play_text}>
              {categoryItemSuccess
                ? t("games.buttons.replay")
                : t("games.buttons.play")}
            </div>
          </div>
        </>
      )}
    </div>
  );
});
