import "../../src/App.css";
import { Link } from "react-router-dom";
import Footer from "../components/UI/Footer/Footer";

const Home = () => {
  return (
    <div className="App">
      <header className="header">
        <Link to="/settings" className="header_settings" />
      </header>
      <main className="main_content">
        <h1 className="main_content_header">Movie Quiz</h1>
        <div className="buttons">
          <Link to="/categories/actors" className="button_style">
            Actors Quiz
          </Link>
          <Link to="/categories/pictures" className="button_style">
            Pictures Quiz
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
