import { t } from "i18next";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import cl from "./card_item.module.css";

type Props = {
  id: number;
  name: string | null;
  success: string;
  avatar: string;
  route: string;
  questions?: any;
  index?: number;
};

export const CardItem = memo(
  ({ id, name, success, avatar, route, questions }: Props) => {
    const navigate = useNavigate();
    const handleStartClick = () => {
      navigate(`${route}/${id}`, { state: questions });
    };
    return (
      <div className={cl.item}>
        <div className={cl.item_title}>{t(name!)}</div>
        <div className={cl.item_status}>{success}</div>
        <div
          className={cl.item_avatar}
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
        <div className={cl.item_play} onClick={handleStartClick}>
          <div
            className={success ? cl.item_replay_icon : cl.item_play_icon}
          ></div>
          <div className={cl.item_play_text}>
            {success ? t("games.buttons.replay") : t("games.buttons.play")}
          </div>
        </div>
      </div>
    );
  }
);
