import Navigation from "./header/Navigation";
import Hero from "./header/Hero";
import MouseScroll from "./header/MouseScroll";
import Details from "./about/Details";

export default function App() {
  return (
    <>
      <header className="header" id="home">
        <Navigation />
        <Hero />
        <MouseScroll />
      </header>
      <section id="about">
        <div className="section">
          <p className="title">biography</p>
          <h2>about me</h2>
          <div className="section-content">
            <div className="img-container">
              <img src="./img/Me.webp" alt="" />
            </div>

            <Details />
          </div>
        </div>
      </section>
    </>
  );
}
