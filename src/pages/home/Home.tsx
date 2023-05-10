import "./styles/home.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/UI/footer/Footer";
import MyButton from "../../components/UI/button/MyButton";
import { useCallback } from "react";
import SettingsIcon from "../../components/UI/settings/SettingsIcon";
import AppTitle from "../../components/UI/app_title/AppTitle";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonActorsClick = useCallback(() => {
    navigate("/categories", {state: "actors"});
  }, [navigate]);

  const handleButtonMoviesClick = useCallback(() => {
    navigate("/categories", {state: "movies"});
  }, [navigate]);

  return (
    <div className="home_page">
      <header className="home_header">
        <SettingsIcon />
      </header>
      <main className="home_content">
        <AppTitle title="Movie Quiz" size="big" />
        <div className="home_content_buttons">
          <MyButton
            text={"Actors Quiz"}
            onClick={handleButtonActorsClick}
          ></MyButton>
          <MyButton
            text={"Movies Quiz"}
            onClick={handleButtonMoviesClick}
          ></MyButton>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
