import SocialMediaIcons from "./SocialMediaIcons";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function Hero({ t }) {
  const [text] = useTypewriter({
    words: [t("HiThere"), t("FSD")],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="hero">
      <div className="hero-img">
        <img src="./img/Me_02.jpg" alt="Me" />
        <SocialMediaIcons />
      </div>
      <h1>
        <span>SBAI </span>Abdessamad
      </h1>

      <div className="wavy">
        {text}
        <Cursor />
      </div>
    </div>
  );
}

export default Hero;
