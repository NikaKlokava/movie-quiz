import { Link } from "react-router-dom";
import { routeNames } from "../../../router";
import classes from "./settings.module.css";

const SettingsIcon = () => {
  return <Link to={routeNames.Settings} className={classes.settings_icon} />;
};

export default SettingsIcon;
