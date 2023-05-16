import { MyButton } from "../../../shared/components/UI/button/MyButton";
import { useState, useCallback } from "react";
import {
  useSettingsContext,
  defaultSettingsValues,
} from "../../../shared/context";
import cl from "../styles/settings_content.module.css";

export const SettingsContent = () => {
  const settings = useSettingsContext();

  const [volume, setVolume] = useState(settings.volume);
  const [active, setActive] = useState(settings.active);
  const [time, setTime] = useState(settings.time);

  const handleDefaultClick = useCallback(() => {
    setActive(defaultSettingsValues.active);
    setVolume(defaultSettingsValues.volume);
    setTime(defaultSettingsValues.time);

    settings.updateSettings?.(defaultSettingsValues);
  }, [settings]);

  const handleActiveClick = useCallback(() => {
    setActive((current) => !current);
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
    });
  }, [settings, active, time, volume]);
  return (
    <>
      <div className={cl.settings_content_volume}>
        <div className={cl.volume_text}>Volume</div>
        <input
          className={cl.volume_slider}
          type="range"
          step="10"
          value={volume}
          onChange={handleVolumeChange}
        ></input>
      </div>
      <div className={cl.settings_content_timeon}>
        <div className={cl.timeon_text}>Time game</div>
        <div className={cl.timeon_choose}>
          <div
            className={active ? `${cl.time_on} ${cl.active}` : `${cl.time_on}`}
            onClick={handleActiveClick}
          >
            On
          </div>
          <div
            className={
              active ? `${cl.time_off}` : `${cl.time_off} ${cl.active}`
            }
            onClick={handleActiveClick}
          >
            Off
          </div>
        </div>
      </div>
      <div className={cl.settings_content_time}>
        <div className={cl.time_text}>Time to answer</div>
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
      <div className={cl.settings_content_buttons}>
        <MyButton text="Default" onClick={handleDefaultClick} />
        <MyButton text="Save" onClick={handleSavePress} />
      </div>
    </>
  );
};
