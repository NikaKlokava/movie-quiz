import { MyButton } from "../../../shared/components/button/MyButton";
import {
  useSettingsContext,
  defaultSettingsValues,
} from "../../../shared/context";
import cl from "../styles/settings_content.module.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { useNavigate } from "react-router";
import { routeNames } from "../../../router";
import { Formik } from "formik";
import { Loader } from "../../../shared/components/loader";

export const SettingsContent = () => {
  const { t } = useTranslation();
  const settings = useSettingsContext();
  const navigate = useNavigate();

  return (
    <>
      {settings.loading ? (
        <Loader />
      ) : (
        <Formik
          initialValues={settings.data}
          onSubmit={(values) => {
            settings.updateSettings?.({
              data: {
                time: values.time,
                active: values.active,
                volume: values.volume,
                language: values.language,
              },
            });
            i18n.changeLanguage(values.language);
            navigate(routeNames.Home);
          }}
        >
          {({ values, setFieldValue, handleSubmit, setValues }) => (
            <>
              <div className={cl.settings_content_timeon}>
                <p className={cl.timeon_text}>{t("settings.time-game")}</p>
                <div className={cl.timeon_choose}>
                  <p
                    className={
                      values.active
                        ? `${cl.time_on} ${cl.active}`
                        : `${cl.time_on}`
                    }
                    onClick={() => {
                      setFieldValue("active", !values.active);
                    }}
                  >
                    {t("game-time.on")}
                  </p>
                  <p
                    className={
                      values.active
                        ? `${cl.time_off}`
                        : `${cl.time_off} ${cl.active}`
                    }
                    onClick={() => {
                      setFieldValue("active", !values.active);
                    }}
                  >
                    {t("game-time.off")}
                  </p>
                </div>
              </div>
              <div className={cl.settings_content_time}>
                <p className={cl.time_text}>{t("settings.timer")}</p>
                <div className={cl.time_choose}>
                  <button
                    className={cl.decrement}
                    onClick={() => {
                      setFieldValue(
                        "time",
                        values.time > 10 ? values.time - 10 : values.time
                      );
                    }}
                  >
                    -
                  </button>
                  <p className={cl.current_game_time}>{values.time}</p>
                  <button
                    className={cl.increment}
                    onClick={() => {
                      setFieldValue(
                        "time",
                        values.time < 100 ? values.time + 10 : values.time
                      );
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className={cl.settings_content_language}>
                <p className={cl.language_title}>{t("language.title")}</p>
                <div className={cl.language_choose}>
                  <p
                    className={
                      values.language === "en"
                        ? `${cl.languages} ${cl.active}`
                        : `${cl.languages}`
                    }
                    onClick={() => {
                      setFieldValue("language", "en");
                    }}
                  >
                    {t("language.en")}
                  </p>
                  <p
                    className={
                      values.language === "ru"
                        ? `${cl.languages} ${cl.active}`
                        : `${cl.languages}`
                    }
                    onClick={() => {
                      setFieldValue("language", "ru");
                    }}
                  >
                    {t("language.ru")}
                  </p>
                </div>
              </div>
              <div className={cl.settings_content_buttons}>
                <MyButton
                  text={t("setting-buttons.default")}
                  onClick={() => {
                    settings.defaultSettings?.();
                    setValues(defaultSettingsValues.data);
                  }}
                />
                <MyButton
                  type="submit"
                  text={t("setting-buttons.save")}
                  onClick={handleSubmit}
                />
              </div>
            </>
          )}
        </Formik>
      )}
    </>
  );
};
