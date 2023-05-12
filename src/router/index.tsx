import Categories from "../pages/categories/Categories";
import Home from "../pages/home/Home";
import Quiz from "../pages/quiz/Quiz";
import Settings from "../pages/settings/Settings";
import "../App.css";

export enum routeNames {
  Home = "/",
  Quiz = "/quiz/:id",
  Settings = "/settings",
  Categories = "/categories/:id",
}

export const routes = [
  { path: routeNames.Home, element: <Home />, key: 1 },
  {
    path: routeNames.Categories,
    element: <Categories />,
    key: 2,
  },
  { path: routeNames.Quiz, element: <Quiz />, key: 4 },
  { path: routeNames.Settings, element: <Settings />, key: 5 },
];
