import { AppTitle } from "../app_title/AppTitle";
import { Navigation } from "../navigation/Navigation";
import { SettingsIcon } from "../settings/SettingsIcon";
import cl from "./header.module.css";
import { useTranslation } from "react-i18next";
import { memo } from "react";

export const Header = memo(() => {
  const { t } = useTranslation();
  return (
    <header className={cl.header}>
      <div className={cl.header_content}>
        <AppTitle title={t("app-title-categories")} size="small" />
        <Navigation />
      </div>
      <SettingsIcon />
    </header>
  );
});
