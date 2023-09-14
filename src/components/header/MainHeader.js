import Hero from "./Hero";
import MouseScroll from "./MouseScroll";
import Navigation from "./Navigation";

function MainHeader() {
  return (
    <header className="header" id="home">
      <Navigation />
      <Hero />
      <MouseScroll />
    </header>
  );
}

export default MainHeader;
