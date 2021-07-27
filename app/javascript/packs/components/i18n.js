import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import loadPath from 'loadPath.js.erb';
import translationEN from "../../../assets/locales/en/translation.json";
import translationDE from "../../../assets/locales/de/translation.json";

const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbacklang: 'en',
  fallbackLng: ['en'],
  resources,
  backend: {
    loadPath
  },
  debug: true,
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie']
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18n;