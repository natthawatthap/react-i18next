import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./languages/en.json";
import thTranslation from "./languages/th.json";
import MyComponent from "./components/MyComponent";
import LanguageSwitcher from "./components/LanguageSwitcher";

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    th: {
      translation: thTranslation,
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <LanguageSwitcher></LanguageSwitcher>
        <MyComponent></MyComponent>
      </div>
    </I18nextProvider>
  );
}

export default App;
