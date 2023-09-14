import MyProjects from "./MyProjects";

function MainProject({ t }) {
  return (
    <section id="projects">
      <div className="section">
        <p className="title">{t("projT")}</p>
        <h2>{t("projD")}</h2>
        <MyProjects t={t} />
      </div>
    </section>
  );
}

export default MainProject;
