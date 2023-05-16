import { AppTitle } from "../../shared/components/UI/app_title/AppTitle";
import { SettingsIcon } from "../../shared/components/UI/settings/SettingsIcon";
import { MyButton } from "../../shared/components/UI/button/MyButton";
import { Footer } from "../../shared/components/UI/footer/Footer";
import { routeNames } from "../../router";
import { useNavigate } from "react-router-dom";
import cl from "./styles/home.module.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={cl.home_page}>
      <header className={cl.home_header}>
        <SettingsIcon />
      </header>
      <main className={cl.home_content}>
        <AppTitle title="Movie Quiz" size="big" />
        <div className={cl.home_content_buttons}>
          <MyButton
            text={"Actors Quiz"}
            onClick={() => {
              navigate(`${routeNames.Categories}/1`);
            }}
          ></MyButton>
          <MyButton
            text={"Movies Quiz"}
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
