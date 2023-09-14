function Navigation() {
  return (
    <nav>
      <a href="#home" className="LK logo-icons" rel="noopener noreferrer">
        <img
          src="./icons/sbai-logo.png"
          alt="logo"
          className="logo logo-black"
        />
        <img
          src="./icons/sbai-logo-02.png"
          alt="logo"
          className="logo logo-white"
        />
      </a>
      <div className="main-nav">
        <ul>
          <li>
            <a className="LK" href="#home">
              home
            </a>
          </li>
          <li>
            <a className="LK" href="#about">
              about
            </a>
          </li>
          <li>
            <a className="LK" href="#skills">
              skills
            </a>
          </li>
          <li>
            <a className="LK" href="#projects">
              projects
            </a>
          </li>
          <li>
            <a className="LK" href="#contact">
              contact
            </a>
          </li>
        </ul>

        <span className="btn-lang">
          <a href="google.com" className="lang-btn">
            fr
          </a>
        </span>
      </div>
    </nav>
  );
}

export default Navigation;
