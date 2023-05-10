import Footer from "../../components/UI/footer/Footer";
import CategoryItem from "./components/category_item/CategoryItem";
import "./styles/categories.css";
import Header from "../../components/UI/header/Header";
import { useCategories } from "./hooks";
import { useLocation } from "react-router-dom";

const Categories = () => {
  const { state } = useLocation();
  const params = state;

  const categories = useCategories(params);

  return (
    <div className="categories_page">
      <Header />
      <main className="categories_list_container">
        <div className="categories_list">
          {categories.map((cat) => (
            <CategoryItem
              key={cat.id}
              part={cat.name}
              success={`${cat.success}/${cat.total}`}
              avatar={cat.avatar}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
