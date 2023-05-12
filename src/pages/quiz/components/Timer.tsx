import { useCallback, useEffect, useState } from "react";
import { useSettingsContext } from "../../../shared/context";
import "./timer.css";

type Props = {
  onTimeout: (res: QuestionResult) => void;
  onStopPress: (end: GameResult) => void;
};

export const Timer = ({ onTimeout, onStopPress }: Props) => {
  const settings = useSettingsContext();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        return seconds + 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [settings.time]);

  useEffect(() => {
    if (settings.time === seconds) {
      onTimeout("timeout");
    }
  }, [onTimeout, seconds, settings.time]);

  const hanldeTimerStopClick = useCallback(() => {
    onStopPress("stopped");
  }, [onStopPress]);

  return (
    <div className="question_timer">
      <div className="timer_stop" onClick={hanldeTimerStopClick}></div>
      <div className="timer_duration">
        <div className="timer_duration_all">
          <div
            className="timer_duration_tick"
            style={{ width: `${(seconds / settings.time) * 100}%` }}
          />
        </div>
      </div>
      <div className="timer_time">{seconds}</div>
    </div>
  );
};
