import Categories from "../pages/Categories";
import Home from "../pages/Home";
import Questions from "../pages/Questions";
import Settings from "../pages/Settings";
import Actors from "../pages/Actors";
import Pictures from "../pages/Pictures";
import "../App.css";

export const routes = [
  { path: "/", element: <Home />, key: 1 },
  { path: "/categories", element: <Categories />, key: 2 },
  { path: "/questions", element: <Questions />, key: 3 },
  { path: "/settings", element: <Settings />, key: 4 },
  { path: "/categories/actors", element: <Actors />, key: 5 },
  { path: "/categories/pictures", element: <Pictures />, key: 6 },
];
