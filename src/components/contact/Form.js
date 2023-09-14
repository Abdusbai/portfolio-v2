function Form() {
  return (
    <div className="right-contact-su">
      <form name="contact" netlify>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your full name"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email address"
        />
        <textarea
          required
          name="message"
          placeholder="Enter your message"
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Form;
