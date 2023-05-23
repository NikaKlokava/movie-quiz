import { Footer } from "../../shared/components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { SettingsContent } from "./components/SettingsContent";
import { routeNames } from "../../router";
import cl from "./styles/settings.module.css";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";

export const Settings = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSettingsBackClick = useCallback(() => {
    navigate(routeNames.Home);
  }, [navigate]);

  return (
    <div className={cl.settings_page}>
      <header className={cl.settings_header}>
        <div
          className={cl.settings_header_back}
          onClick={handleSettingsBackClick}
        >
          <div className={cl.back_icon}></div>
          <p className={cl.back_text}>{t("settings-title")}</p>
        </div>
      </header>
      <main className={cl.settings_content}>
        <SettingsContent />
      </main>
      <Footer />
    </div>
  );
};
