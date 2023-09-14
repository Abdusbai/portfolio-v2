import Hero from "./Hero";
import MouseScroll from "./MouseScroll";
import Navigation from "./Navigation";

function MainHeader({ t, LanguageSwitcher }) {
  return (
    <header className="header" id="home">
      <Navigation t={t} LanguageSwitcher={LanguageSwitcher} />
      <Hero t={t} />
      <MouseScroll />
    </header>
  );
}

export default MainHeader;
