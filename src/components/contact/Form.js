function Form({ t }) {
  return (
    <div className="right-contact-su">
      <form name="contact" netlify>
        <input type="text" name="name" required placeholder={t("enterName")} />
        <input
          type="email"
          name="email"
          required
          placeholder={t("enterMail")}
        />
        <textarea
          required
          name="message"
          placeholder={t("enterMsg")}
        ></textarea>
        <button className="btn">{t("submit")}</button>
      </form>
    </div>
  );
}

export default Form;
