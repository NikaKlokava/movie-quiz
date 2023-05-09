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
    navigate("/categories/actors");
  }, [navigate]);

  const handleButtonPicturesClick = useCallback(() => {
    navigate("/categories/pictures");
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
            text={"Pictures Quiz"}
            onClick={handleButtonPicturesClick}
          ></MyButton>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
