import classes from "./navigation.module.css";
import { useNavigate } from "react-router";
import { routeNames } from "../../../router";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(routeNames.Home);
  };

  return (
    <>
      <div className={classes.navigation_home} onClick={handleHomeClick}>
        {t("categories-header.home")}
      </div>
      <div className={classes.navigation_categories}>
        {t("categories-header.categories")}
      </div>
    </>
  );
};
