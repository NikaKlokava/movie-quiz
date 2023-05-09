import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/UI/footer/Footer";
import MyButton from "../../components/UI/button/MyButton";
import { useCallback } from "react";

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
        <Link to="/settings" className="home_header_settings" />
      </header>
      <main className="home_content">
        <h1 className="home_content_header">Movie Quiz</h1>
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
