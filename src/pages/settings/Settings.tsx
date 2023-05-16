import { Footer } from "../../shared/components/UI/footer/Footer";
import { Link } from "react-router-dom";
import { SettingsContent } from "./components/SettingsContent";
import { routeNames } from "../../router";
import cl from "./styles/settings.module.css";

export const Settings = () => (
  <div className={cl.settings_page}>
    <header className={cl.settings_header}>
      <div className={cl.settings_header_back}>
        <Link to={routeNames.Home} className={cl.back_icon}></Link>
        <p className={cl.back_text}>Settings</p>
      </div>
    </header>
    <main className={cl.settings_content}>
      <SettingsContent />
    </main>
    <Footer />
  </div>
);
