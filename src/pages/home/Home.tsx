import { AppTitle } from "../../shared/components/app_title/AppTitle";
import { SettingsIcon } from "../../shared/components/settings/SettingsIcon";
import { MyButton } from "../../shared/components/button/MyButton";
import { Footer } from "../../shared/components/footer/Footer";
import { routeNames } from "../../router";
import { useNavigate } from "react-router-dom";
import cl from "./styles/home.module.css";
import classes from "../../shared/styles/styles.module.css";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={classes.page}>
      <header className={cl.home_header}>
        <SettingsIcon />
      </header>
      <main className={cl.home_content}>
        <AppTitle title={t("home.title")} size="big" />
        <div className={cl.home_content_buttons}>
          <MyButton
            key={0}
            text={t("games.buttons.play")}
            onClick={() => {
              navigate(`${routeNames.Categories}`);
            }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
