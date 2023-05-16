import { AppTitle } from "../app_title/AppTitle";
import { Navigation } from "../navigation/Navigation";
import { SettingsIcon } from "../settings/SettingsIcon";
import cl from "./header.module.css";

export const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.header_content}>
        <AppTitle title="MovieQuiz" size="small" />
        <Navigation />
      </div>
      <SettingsIcon />
    </header>
  );
};
