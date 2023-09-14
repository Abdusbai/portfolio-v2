import Form from "./Form";
import Social from "./Social";

function MainContact() {
  return (
    <section className="bg-color" id="contact">
      <div className="section">
        <p className="title">CONTACT</p>
        <h2>Get in Touch</h2>
        <div className="section-content-contact-us">
          <Social />
          <Form />
        </div>
      </div>
    </section>
  );
}

export default MainContact;
