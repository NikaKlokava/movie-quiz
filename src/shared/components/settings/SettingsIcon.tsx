import { memo } from "react";
import { Link } from "react-router-dom";
import { routeNames } from "../../../router";
import classes from "./settings.module.css";

export const SettingsIcon = memo(() => {
  return <Link to={routeNames.Settings} className={classes.settings_icon} />;
});
