import MySkills from "./MySkills";

function MainSkills({ t }) {
  return (
    <section className="bg-color" id="skills">
      <div className="section">
        <p className="title">{t("skills")}</p>
        <h2>{t("skillsT")}</h2>
        <MySkills t={t} />
      </div>
    </section>
  );
}

export default MainSkills;
