import Categories from "../pages/categories/Categories";
import Home from "../pages/home/Home";
import Quiz from "../pages/quiz/Quiz";
import Settings from "../pages/settings/Settings";
import { Navigate } from "react-router";

export enum routeNames {
  Home = "/",
  Quiz = "/quiz",
  Settings = "/settings",
  Categories = "/categories",
  RedirectHome = "*",
}

export const routes = [
  { path: routeNames.Home, element: <Home />, key: 1 },
  {
    path: `${routeNames.Categories}/:id`,
    element: <Categories />,
    key: 2,
  },
  { path: `${routeNames.Quiz}/:id`, element: <Quiz />, key: 3 },
  { path: routeNames.Settings, element: <Settings />, key: 4 },
  {
    path: routeNames.RedirectHome,
    element: <Navigate to={routeNames.Home} replace />,
    key: 5,
  },
];
