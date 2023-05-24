import { memo, useEffect } from "react";
import { useNavigate } from "react-router";
import { routeNames } from "../../../router";
import { useCategory } from "../hooks/use-category";
import classes from "../styles/category_item.module.css";

type CategoryItemType = {
  id: number;
};

export const CategoryItem = memo(({ id }: CategoryItemType) => {
  const navigate = useNavigate();
  const category = useCategory(id);

  const { name, success, total, avatar, questions } = category.data;

  useEffect(() => {
    category.loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePlayClick = () => {
    navigate(`${routeNames.Quiz}/${id}`, { state: questions });
  };

  return (
    <div className={classes.item}>
      {!category.loading && (
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
