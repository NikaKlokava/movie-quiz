import { AppTitle } from "../../shared/components/app_title/AppTitle";
import { SettingsIcon } from "../../shared/components/settings/SettingsIcon";
import { MyButton } from "../../shared/components/button/MyButton";
import { Footer } from "../../shared/components/footer/Footer";
import { routeNames } from "../../router";
import { useNavigate } from "react-router-dom";
import cl from "./styles/home.module.css";
import { useTranslation } from "react-i18next";
import { useHome } from "./hooks";
import { useEffect } from "react";
import { Loader } from "../../shared/components/loader";

export const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const home = useHome();

  useEffect(() => {
    home.loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cl.home_page}>
      <header className={cl.home_header}>
        <SettingsIcon />
      </header>
      <main className={cl.home_content}>
        <AppTitle title={t("app-title-home")} size="big" />
        <div className={cl.home_content_buttons}>
          {home.isLoading ? (
            <Loader />
          ) : (
            home.data.map((quiz: any) => (
              <MyButton
                key={quiz.id}
                text={quiz.name}
                onClick={() => {
                  navigate(`${routeNames.Categories}/${quiz.id}`);
                }}
              />
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
