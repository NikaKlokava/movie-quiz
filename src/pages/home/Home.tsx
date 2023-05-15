import "./styles/home.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/UI/footer/Footer";
import MyButton from "../../components/UI/button/MyButton";
import SettingsIcon from "../../components/UI/settings/SettingsIcon";
import AppTitle from "../../components/UI/app_title/AppTitle";
import { routeNames } from "../../router";

const Home = () => {
  const navigate = useNavigate();

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

export default Home;
