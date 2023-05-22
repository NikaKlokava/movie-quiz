import { memo } from "react";
import { useNavigate } from "react-router";
import { routeNames } from "../../../router";
import classes from "../styles/category_item.module.css";

type CategoryItemType = {
  id: number;
  part: string;
  success: string;
  avatar?: string;
};

export const CategoryItem = memo(
  ({ id, part, success, avatar }: CategoryItemType) => {
    const navigate = useNavigate();

    const handlePlayClick = () => {
      navigate(`${routeNames.Quiz}/${id}`);
    };

    return (
      <div className={classes.item}>
        <div className={classes.item_title}>{part}</div>
        <div className={classes.item_status}>{success}</div>
        <div
          className={classes.item_avatar}
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
        <div className={classes.item_play} onClick={handlePlayClick}>
          <div className={classes.item_play_icon}></div>
          <div className={classes.item_play_text}>Play</div>
        </div>
      </div>
    );
  }
);
