import Footer from "../../components/UI/footer/Footer";
import { Link } from "react-router-dom";
import "../../styles/settings.css";
import SettingsContent from "./components/SettingsContent";

const Settings = () => {
  return (
    <div className="settings_page">
      <header className="settings_header">
        <div className="settings_header_back">
          <Link to="/" className="back_icon"></Link>
          <p className="back_text">Settings</p>
        </div>
      </header>
      <main className="settings_content">
        <SettingsContent />
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
