import classes from "./navigation.module.css";
import { useNavigate } from "react-router";
import { routeNames } from "../../../../router";

export const Navigation = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(routeNames.Home);
  };

  return (
    <>
      <div className={classes.navigation_home} onClick={handleHomeClick}>
        Home
      </div>
      <div className={classes.navigation_categories}>Categories</div>
    </>
  );
};
