import { memo, useEffect } from "react";
import { useNavigate } from "react-router";
import { routeNames } from "../../../router";
import { useSettingsContext } from "../../../shared/context";
import { useServerData } from "../../../shared/hooks";
import classes from "../styles/category_item.module.css";
import { Loader } from "../../../shared/components/loader";

type Props = {
  id: number;
};

export const CategoryItem = memo(({ id }: Props) => {
  const navigate = useNavigate();
  const settings = useSettingsContext();

  const url = `${process.env.REACT_APP_URL}/games/${id}_${settings.language}.json`;
  
  const { loadData, isLoading, data } = useServerData(url);
  const { name, success, total, avatar, questions } = data;

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePlayClick = () => {
    navigate(`${routeNames.Quiz}/${id}`, { state: questions });
  };

  return (
    <div className={classes.item}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={classes.item_title}>{name}</div>
          <div className={classes.item_status}>{`${success} / ${total}`}</div>
          <div
            className={classes.item_avatar}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className={classes.item_play} onClick={handlePlayClick}>
            <div className={classes.item_play_icon}></div>
            <div className={classes.item_play_text}>Play</div>
          </div>
        </>
      )}
    </div>
  );
});
