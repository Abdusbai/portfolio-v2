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
      <section className="bg-color" id="skills">
        <div className="section">
          <p className="title">skills</p>
          <h2>What I Bring to the Table</h2>
          <div className="section-content-skills">
            <div className="skills">
              <h2>Front-End</h2>
              <span>
                <img src="./img/html.webp" alt="html" />
                <p>Html</p>
              </span>
              <span>
                <img src="./img/css.webp" alt="html" />
                <p>Css</p>
              </span>
              <span>
                <img src="./img/js.webp" alt="html" />
                <p>JavaScript</p>
              </span>
              <span>
                <img src="./img/jQuery.webp" alt="html" />
                <p>jQuery</p>
              </span>
              <span>
                <img src="./img/Bootstrap.webp" alt="html" />
                <p>Bootstrap</p>
              </span>
              <span>
                <img src="./img/React.webp" alt="html" />
                <p>React</p>
              </span>
            </div>

            <div className="skills-02">
              <h2>Back-End</h2>
              <span>
                <img src="./img/python.webp" alt="html" />
                <p>Python</p>
              </span>
              <span>
                <img src="./img/django.webp" alt="html" />
                <p>Django</p>
              </span>
              <span>
                <img src="./img/php.webp" alt="html" />
                <p>Php</p>
              </span>
              <span>
                <img src="./img/laravel.webp" alt="html" />
                <p>Laravel</p>
              </span>
            </div>

            <div className="skills-02">
              <h2>Database</h2>
              <span>
                <img src="./img/Sqlserver.webp" alt="html" />
                <p>SQLServer</p>
              </span>
              <span>
                <img src="./img/mysql.webp" alt="html" />
                <p>MySQL</p>
              </span>
              <span>
                <img src="./img/Postgresql.webp" alt="html" />
                <p>PostgreSQL</p>
              </span>
              <span>
                <img src="./img/PlSql.webp" alt="html" />
                <p>PL/SQL</p>
              </span>
            </div>

            <div className="skills-01">
              <h2>Development Tools</h2>
              <span>
                <img src="./img/git.webp" alt="html" />
                <p>Git</p>
              </span>
              <span>
                <img src="./img/github.webp" alt="html" />
                <p>GitHub</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
