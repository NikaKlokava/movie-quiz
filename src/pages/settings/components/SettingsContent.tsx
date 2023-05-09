import MyButton from "../../../components/UI/button/MyButton";
import { useState, useCallback } from "react";
import {
  useSettingsContext,
  defaultSettingsValues,
} from "../../../shared/context";
import "../styles/settings.css";

const SettongsContent = () => {
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
      <div className="settings_content_volume">
        <div className="volume_text">Volume</div>
        <input
          className="volume_slider"
          type="range"
          step="10"
          value={volume}
          onChange={handleVolumeChange}
        ></input>
      </div>
      <div className="settings_content_timeon">
        <div className="timeon_text">Time game</div>
        <div className="timeon_choose">
          <div
            className={active ? "time_on active" : "time_on"}
            onClick={handleActiveClick}
          >
            On
          </div>
          <div
            className={active ? "time_off" : "time_off active"}
            onClick={handleActiveClick}
          >
            Off
          </div>
        </div>
      </div>
      <div className="settings_content_time">
        <div className="time_text">Time to answer</div>
        <div className="time_choose">
          <button className="decrement" onClick={handleTimeDecrementPress}>
            -
          </button>
          <p className="current_game_time">{time}</p>
          <button className="increment" onClick={handleTimeIncrementPress}>
            +
          </button>
        </div>
      </div>
      <div className="settings_content_buttons">
        <MyButton text="Default" onClick={handleDefaultClick} />
        <MyButton text="Save" onClick={handleSavePress} />
      </div>
    </>
  );
};

export default SettongsContent;
