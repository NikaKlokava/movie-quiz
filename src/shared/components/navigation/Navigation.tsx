import classes from "./navigation.module.css";
import { useNavigate } from "react-router";
import { routeNames } from "../../../router";
import { useTranslation } from "react-i18next";
import { memo } from "react";

export const Navigation = memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(routeNames.Home);
  };

  const handleCategoriesClick = () => {
    isInSettings && navigate(routeNames.Categories);
  };

  const isInSettings = window.location.hash === "#/settings";

  return (
    <>
      <div className={classes.nav_home} onClick={handleHomeClick}>
        {t("navigation.home")}
      </div>
      <div
        className={
          isInSettings ? classes.nav_categories : classes.nav_categories_active
        }
        onClick={handleCategoriesClick}
      >
        {t("navigation.categories")}
      </div>
      {isInSettings && (
        <div className={classes.nav_settings}>{t("navigation.settings")}</div>
      )}
    </>
  );
});
