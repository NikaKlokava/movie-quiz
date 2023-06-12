import { SettingsContent } from "./components/SettingsContent";
import cl from "./styles/settings.module.css";

export const Settings = () => {
  return (
    <main className={cl.settings_content}>
      <SettingsContent />
    </main>
  );
};
