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
        <div class="section">
          <p class="title">biography</p>
          <h2>about me</h2>
          <div class="section-content">
            <div class="img-container">
              <img src="./img/Me.webp" alt="" />
            </div>

            <Details />
          </div>
        </div>
      </section>
    </>
  );
}
