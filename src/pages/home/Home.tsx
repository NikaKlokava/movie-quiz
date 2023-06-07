import { AppTitle } from "../../shared/components/app_title/AppTitle";
import { SettingsIcon } from "../../shared/components/settings/SettingsIcon";
import { MyButton } from "../../shared/components/button/MyButton";
import { Footer } from "../../shared/components/footer/Footer";
import { routeNames } from "../../router";
import { useNavigate } from "react-router-dom";
import cl from "./styles/home.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Loader } from "../../shared/components/loader";
import { useServerData } from "../../shared/hooks";

export const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const url = `${process.env.REACT_APP_URL}/categories/quizzes.json`;
  const { loadData, isLoading, data } = useServerData(url);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cl.home_page}>
      <header className={cl.home_header}>
        <SettingsIcon />
      </header>
      <main className={cl.home_content}>
        <AppTitle title={t("home.title")} size="big" />
        <div className={cl.home_content_buttons}>
          {isLoading ? (
            <Loader />
          ) : (
            data.map((quiz: Quiz) => (
              <MyButton
                key={quiz.id}
                text={t(quiz.name)}
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
