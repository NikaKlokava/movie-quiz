import Footer from "../../components/UI/footer/Footer";
import CategoryItem from "./components/category_item/CategoryItem";
import "./styles/categories.css";
import Header from "../../components/UI/header/Header";
import { useCategories } from "./hooks";
import { useParams } from "react-router-dom";

const Categories = () => {
  const params = useParams();

  const categories = useCategories(params?.id);

  return (
    <div className="categories_page">
      <Header />
      <main className="categories_list_container">
        <div className="categories_list">
          {categories &&
            categories.map((cat) => (
              <CategoryItem
                key={cat.id}
                part={cat.name}
                success={`${cat.success}/${cat.total}`}
                avatar={cat.avatar}
                id={cat.id}
              />
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
