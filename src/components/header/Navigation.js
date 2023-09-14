import MobileBtn from "./MobileBtn";
import React from "react";

function Navigation({ t, LanguageSwitcher, handleOpen, navigationRef }) {
  return (
    <nav ref={navigationRef}>
      <a href="#home" className="LK logo-icons" rel="noopener noreferrer">
        <img
          src="./icons/sbai-logo.png"
          alt="logo"
          className="logo logo-black"
        />
        <img
          src="./icons/sbai-logo-02.png"
          alt="logo"
          className="logo logo-white"
        />
      </a>
      <div className="main-nav">
        <ul>
          <li>
            <a className="LK" href="#home">
              {t("Home")}
            </a>
          </li>
          <li>
            <a className="LK" href="#about">
              {t("About")}
            </a>
          </li>
          <li>
            <a className="LK" href="#skills">
              {t("Skills")}
            </a>
          </li>
          <li>
            <a className="LK" href="#projects">
              {t("Projects")}
            </a>
          </li>
          <li>
            <a className="LK" href="#contact">
              {t("Contact")}
            </a>
          </li>
        </ul>

        <span className="btn-lang">
          <LanguageSwitcher />
          <MobileBtn handleOpen={handleOpen} />
        </span>
      </div>
    </nav>
  );
}

export default Navigation;
