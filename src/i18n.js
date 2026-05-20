import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCulinary from "./locales/en/culinary.json";
import jaCulinary from "./locales/ja/culinary.json";

import enAbout from "./locales/en/about.json";
import jaAbout from "./locales/ja/about.json";

import enFooter from "./locales/en/footer.json";
import jaFooter from "./locales/ja/footer.json";

import enSuppliment from "./locales/en/maitakesuppliment.json";
import jaSuppliment from "./locales/ja/maitakesuppliment.json";

import enOrdernow from "./locales/en/ordernow.json";
import jaOrdernow from "./locales/ja/ordernow.json";

import enAffiliation from "./locales/en/affiliation.json";
import jaAffiliation from "./locales/ja/affiliation.json";

import enNews from "./locales/en/news.json";
import jaNews from "./locales/ja/news.json";

import enAllergen from "./locales/en/allergen.json";
import jaAllergen from "./locales/ja/allergen.json";

import enContact from "./locales/en/contact.json";
import jaContact from "./locales/ja/contact.json";

import enNavbar from "./locales/en/navbar.json";
import jaNavbar from "./locales/ja/navbar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      culinary: enCulinary,
      about: enAbout,
      footer: enFooter,
      maitakesuppliment: enSuppliment,
      ordernow: enOrdernow,
      affiliation: enAffiliation,
      news: enNews,
      allergen: enAllergen,
      contact: enContact,
      navbar: enNavbar
    },

    ja: {
      culinary: jaCulinary,
      about: jaAbout,
      footer: jaFooter,
      maitakesuppliment: jaSuppliment,
      ordernow: jaOrdernow,
      affiliation: jaAffiliation,
      news: jaNews,
      allergen: jaAllergen,
      contact: jaContact,
      navbar: jaNavbar
    },
  },

  lng: "en",

  fallbackLng: "en",

  ns: ["culinary", "about", "footer", "maitakesuppliment", "ordernow", "news", "allergen","navbar"],


  interpolation: {
    escapeValue: false,
  },
});

export default i18n;