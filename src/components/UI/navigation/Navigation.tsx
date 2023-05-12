import classes from "./navigation.module.css";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import { routeNames } from "../../../router";

const Navigation = () => {
  const navigate = useNavigate();

  const handleHomeClick = useCallback(() => {
    navigate(routeNames.Home);
  }, [navigate]);

  return (
    <>
      <div className={classes.navigation_home} onClick={handleHomeClick}>
        Home
      </div>
      <div className={classes.navigation_categories}>Categories</div>
    </>
  );
};

export default Navigation;
