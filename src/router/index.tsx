import { Categories } from "../pages/categories/Categories";
import { Quiz } from "../pages/quiz/Quiz";
import { Settings } from "../pages/settings/Settings";
import { Games } from "../pages/games/Games";
import { Navigate } from "react-router";

export enum routeNames {
  Home = "/",
  Quiz = "/quiz",
  Settings = "/settings",
  Categories = "/categories",
  Games = "/categories",
  RedirectHome = "*",
}

export const routes = [
  {
    path: routeNames.Categories,
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
  { path: `${routeNames.Games}/:id`, element: <Games />, key: 6 },
];
