import Footer from "../../components/UI/footer/Footer";
import SettingsIcon from "../../components/UI/settings/SettingsIcon";
import Navigation from "../../components/UI/navigation/Navigation";
import AppTitle from "../../components/UI/app_title/AppTitle";
import CategoryItem from "../../components/UI/category_item/CategoryItem";
import "./styles/actors.css";

const Actors = () => {
  return (
    <div className="actors_page">
      <header className="actors_header">
        <div className="actors_header_content">
          <AppTitle title="MovieQuiz" size="small" />
          <Navigation />
        </div>
        <SettingsIcon />
      </header>
      <main className="actors_list_container">
        <div className="actor_list">
          <CategoryItem part="Part 1" success="7 / 10" />
          <CategoryItem part="Part 2" success="5 / 10" />
          <CategoryItem part="Part 3" success="2 / 10" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Actors;
