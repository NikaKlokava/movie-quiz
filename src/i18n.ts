import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend, { HttpBackendOptions } from "i18next-http-backend";

const loadPath =
  "https://raw.githubusercontent.com/NikaKlokava/movie-quiz-data/main/locales/{{lng}}/{{ns}}.json";

i18n
  .use(HttpBackend)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    backend: {
      loadPath, // https://github.com/i18next/i18next-http-backend
    },
    fallbackLng: "en",
    // debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
