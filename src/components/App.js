import Navigation from "./header/Navigation";
import Hero from "./header/Hero";
import MouseScroll from "./header/MouseScroll";

export default function App() {
  return (
    <>
      <header className="header" id="home">
        <Navigation />
        <Hero />
        <MouseScroll />
      </header>
    </>
  );
}
