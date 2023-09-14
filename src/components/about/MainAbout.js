import Details from "./Details";

function MainAbout({ t }) {
  return (
    <section id="about">
      <div className="section">
        <p className="title">{t("BIOGRAPHY")}</p>
        <h2>{t("AboutMe")}</h2>
        <div className="section-content">
          <div className="img-container">
            <img src="./img/Me.webp" alt="" />
          </div>
          <Details t={t} />
        </div>
      </div>
    </section>
  );
}

export default MainAbout;
