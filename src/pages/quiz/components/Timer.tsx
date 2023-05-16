import { memo, useEffect, useState } from "react";
import { useSettingsContext } from "../../../shared/context";
import cl from "../styles/timer.module.css";

type Props = {
  onTimeout: (res: QuestionResult) => void;
};

export const Timer = memo(({ onTimeout }: Props) => {
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

  return (
    <div className={cl.question_timer}>
      <div className={cl.timer_duration}>
        <div className={cl.timer_duration_all}>
          <div
            className={cl.timer_duration_tick}
            style={{ width: `${(seconds / settings.time) * 100}%` }}
          />
        </div>
      </div>
      <div className={cl.timer_time}>{seconds}</div>
    </div>
  );
});
