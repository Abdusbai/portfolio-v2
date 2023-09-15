import { React, useState, useEffect } from "react";
import MainHeader from "./header/MainHeader";
import MainAbout from "./about/MainAbout";
import MainSkills from "./skills/MainSkills";
import MainProject from "./projects/MainProject";
import MainContact from "./contact/MainContact";
import MainFooter from "./footer/MainFooter";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import Loader from "./Loader";

export default function App() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove("hide-scroll");
    }, 1500);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("hide-scroll");
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <>
        <MainHeader t={t} LanguageSwitcher={LanguageSwitcher} />
        <MainAbout t={t} />
        <MainSkills t={t} />
        <MainProject t={t} />
        <MainContact t={t} />
        <MainFooter t={t} />
      </>
    </>
  );
}
