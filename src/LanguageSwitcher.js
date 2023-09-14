import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <span className="btn-lang">
      <button onClick={toggleLanguage} className="lang-btn">
        {i18n.language === "en" ? "FR" : "EN"}
      </button>
    </span>
  );
}

export default LanguageSwitcher;
