import { MyButton } from "../../../shared/components/UI/button/MyButton";
import { useState, useCallback } from "react";
import {
  useSettingsContext,
  defaultSettingsValues,
} from "../../../shared/context";
import cl from "../styles/settings_content.module.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { useNavigate } from "react-router";
import { routeNames } from "../../../router";

export const SettingsContent = () => {
  const { t } = useTranslation();
  const settings = useSettingsContext();
  const navigate = useNavigate();

  const [volume, setVolume] = useState(settings.volume);
  const [active, setActive] = useState(settings.active);
  const [time, setTime] = useState(settings.time);
  const [language, setLanguage] = useState(settings.language);

  const handleDefaultClick = useCallback(() => {
    setActive(defaultSettingsValues.active);
    setVolume(defaultSettingsValues.volume);
    setTime(defaultSettingsValues.time);
    setLanguage(defaultSettingsValues.language);
    i18n.changeLanguage(defaultSettingsValues.language);

    settings.updateSettings?.(defaultSettingsValues);
  }, [settings]);

  const handleActiveClick = useCallback(() => {
    setActive((current) => !current);
  }, []);

  const handleEngLanguageClick = useCallback(() => {
    setLanguage("en");
  }, []);

  const handleRuLanguageClick = useCallback(() => {
    setLanguage("ru");
  }, []);

  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setVolume(+e.target.value);
    },
    []
  );

  const handleTimeDecrementPress = useCallback(() => {
    if (time - 10 < 10) {
      setTime(10);
      return;
    }
    setTime((prev) => prev - 10);
  }, [time]);

  const handleTimeIncrementPress = useCallback(() => {
    if (time + 10 > 100) {
      setTime(100);
      return;
    }
    setTime((prev) => prev + 10);
  }, [time]);

  const handleSavePress = useCallback(() => {
    settings.updateSettings?.({
      volume,
      active,
      time,
      language,
    });
    console.log(language);
    i18n.changeLanguage(language);
    navigate(routeNames.Home);
  }, [settings, volume, active, time, language, navigate]);
  return (
    <>
      <div className={cl.settings_content_volume}>
        <p className={cl.volume_text}>{t("settings.volume")}</p>
        <input
          className={cl.volume_slider}
          type="range"
          step="10"
          value={volume}
          onChange={handleVolumeChange}
        ></input>
      </div>
      <div className={cl.settings_content_timeon}>
        <p className={cl.timeon_text}>{t("settings.time-game")}</p>
        <div className={cl.timeon_choose}>
          <p
            className={active ? `${cl.time_on} ${cl.active}` : `${cl.time_on}`}
            onClick={handleActiveClick}
          >
            {t("game-time.on")}
          </p>
          <p
            className={
              active ? `${cl.time_off}` : `${cl.time_off} ${cl.active}`
            }
            onClick={handleActiveClick}
          >
            {t("game-time.off")}
          </p>
        </div>
      </div>
      <div className={cl.settings_content_time}>
        <p className={cl.time_text}>{t("settings.timer")}</p>
        <div className={cl.time_choose}>
          <button className={cl.decrement} onClick={handleTimeDecrementPress}>
            -
          </button>
          <p className={cl.current_game_time}>{time}</p>
          <button className={cl.increment} onClick={handleTimeIncrementPress}>
            +
          </button>
        </div>
      </div>
      <div className={cl.settings_content_language}>
        <p className={cl.language_title}>{t("language.title")}</p>
        <div className={cl.language_choose}>
          <p
            className={
              language === "en"
                ? `${cl.languages} ${cl.active}`
                : `${cl.languages}`
            }
            onClick={handleEngLanguageClick}
          >
            {t("language.en")}
          </p>
          <p
            className={
              language === "ru"
                ? `${cl.languages} ${cl.active}`
                : `${cl.languages}`
            }
            onClick={handleRuLanguageClick}
          >
            {t("language.ru")}
          </p>
        </div>
      </div>
      <div className={cl.settings_content_buttons}>
        <MyButton
          text={t("setting-buttons.default")}
          onClick={handleDefaultClick}
        />
        <MyButton text={t("setting-buttons.save")} onClick={handleSavePress} />
      </div>
    </>
  );
};
