import MainHeader from "./header/MainHeader";
import MainAbout from "./about/MainAbout";
import MainSkills from "./skills/MainSkills";
import MainProject from "./projects/MainProject";
import MainContact from "./contact/MainContact";

export default function App() {
  return (
    <>
      <MainHeader />
      <MainAbout />
      <MainSkills />
      <MainProject />
      <MainContact />
    </>
  );
}
