import Details from "./Details";

function MainAbout() {
  return (
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
  );
}

export default MainAbout;
