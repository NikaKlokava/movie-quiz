import { Link } from "react-router-dom";
import classes from "./settings.module.css";

const SettingsIcon = () => {
  return <Link to="/settings" className={classes.settings_icon} />;
};

export default SettingsIcon;
