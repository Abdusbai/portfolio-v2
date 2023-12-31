function Form({ t }) {
  return (
    <div className="right-contact-su">
      <form name="contact" method="POST" action="/contact">
        <input type="hidden" name="form-name" value="contact" />
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
        <button className="btn" type="submit">
          {t("submit")}
        </button>
      </form>
    </div>
  );
}

export default Form;
