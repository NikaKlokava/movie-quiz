import { AppTitle } from "../../shared/components/UI/app_title/AppTitle";
import { SettingsIcon } from "../../shared/components/UI/settings/SettingsIcon";
import { MyButton } from "../../shared/components/UI/button/MyButton";
import { Footer } from "../../shared/components/UI/footer/Footer";
import { routeNames } from "../../router";
import { useNavigate } from "react-router-dom";
import cl from "./styles/home.module.css";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={cl.home_page}>
      <header className={cl.home_header}>
        <SettingsIcon />
      </header>
      <main className={cl.home_content}>
        <AppTitle title={t("app-title-home")} size="big" />
        <div className={cl.home_content_buttons}>
          <MyButton
            text={t("quiz-title.actors")}
            onClick={() => {
              navigate(`${routeNames.Categories}/1`);
            }}
          ></MyButton>
          <MyButton
            text={t("quiz-title.movies")}
            onClick={() => {
              navigate(`${routeNames.Categories}/2`);
            }}
          ></MyButton>
        </div>
      </main>
      <Footer />
    </div>
  );
};
