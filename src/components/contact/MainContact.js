import Form from "./Form";
import Social from "./Social";

function MainContact({ t }) {
  return (
    <section className="bg-color" id="contactMe">
      <div className="section">
        <p className="title">CONTACT</p>
        <h2>{t("contactD")}</h2>
        <div className="section-content-contact-us">
          <Social t={t} />
          <Form t={t} />
        </div>
      </div>
    </section>
  );
}

export default MainContact;
