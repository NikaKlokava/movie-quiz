import { AppTitle } from "../../shared/components/UI/app_title/AppTitle";
import { SettingsIcon } from "../../shared/components/UI/settings/SettingsIcon";
import { MyButton } from "../../shared/components/UI/button/MyButton";
import { Footer } from "../../shared/components/UI/footer/Footer";
import { routeNames } from "../../router";
import { useNavigate } from "react-router-dom";
import cl from "./styles/home.module.css";
import { useTranslation } from "react-i18next";
import { useHome } from "./hooks";
import { useEffect } from "react";

export const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const home = useHome();

  useEffect(() => {
    home.loadData();
  }, []);

  return (
    <div className={cl.home_page}>
      <header className={cl.home_header}>
        <SettingsIcon />
      </header>
      <main className={cl.home_content}>
        <AppTitle title={t("app-title-home")} size="big" />
        <div className={cl.home_content_buttons}>
          {!home.isLoading &&
            home.data.map((quiz: any) => (
              <MyButton
                key={quiz.id}
                text={quiz.name}
                onClick={() => {
                  navigate(`${routeNames.Categories}/${quiz.id}`);
                }}
              />
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
