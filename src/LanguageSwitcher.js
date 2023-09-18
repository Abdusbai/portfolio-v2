import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");

  const handleChangeLanguage = (e) => {
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <select
        className="lang-btn"
        value={i18n.language}
        onChange={handleChangeLanguage}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
      {/* <span className="btn-lang">
        <button onClick={toggleLanguage} className="lang-btn">
          {i18n.language === "en" ? "FR" : "EN"}
        </button>
      </span> */}
    </>
  );
}

export default LanguageSwitcher;
