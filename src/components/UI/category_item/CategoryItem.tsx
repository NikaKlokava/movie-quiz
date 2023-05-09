import { useCallback } from "react";
import { useNavigate } from "react-router";
import classes from "./category_item.module.css";

const CategoryItem = ({ part, success }: { part: string; success: string }) => {
  const navigate = useNavigate();

  const handlePlayClick = useCallback(() => {
    navigate("/questions");
  }, [navigate]);

  return (
    <div className={classes.item}>
      <div className={classes.item_title}>{part}</div>
      <div className={classes.item_status}>{success}</div>
      <div className={classes.item_avatar}></div>
      <div className={classes.item_play} onClick={handlePlayClick}>
        <div className={classes.item_play_icon}></div>
        <div className={classes.item_play_text}>Play</div>
      </div>
    </div>
  );
};

export default CategoryItem;
