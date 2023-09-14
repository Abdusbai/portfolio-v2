import React from "react";
import MainHeader from "./header/MainHeader";
import MainAbout from "./about/MainAbout";
import MainSkills from "./skills/MainSkills";
import MainProject from "./projects/MainProject";
import MainContact from "./contact/MainContact";
import MainFooter from "./footer/MainFooter";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";

export default function App() {
  const { t } = useTranslation();
  return (
    <>
      <MainHeader t={t} LanguageSwitcher={LanguageSwitcher} />
      <MainAbout t={t} />
      <MainSkills t={t} />
      <MainProject t={t} />
      <MainContact t={t} />
      <MainFooter t={t} />
    </>
  );
}
