import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import MouseScroll from "./MouseScroll";
import Navigation from "./Navigation";

function MainHeader({ t, LanguageSwitcher }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  const sectionHeroRef = useRef(null);
  const navigationRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const sectionHeroEl = sectionHeroRef.current;
    const navigation = navigationRef.current;

    if (!sectionHeroEl || !navigation) return; // Ensure elements exist

    const obs = new IntersectionObserver(
      (entries) => {
        const ent = entries[0];

        if (ent.isIntersecting === false) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
      }
    );

    obs.observe(sectionHeroEl);

    return () => {
      // Clean up the observer when the component unmounts
      obs.unobserve(sectionHeroEl);
    };
  }, []);

  useEffect(() => {
    const navigation = navigationRef.current;

    if (!navigation) return;

    if (isIntersecting) {
      navigation.classList.add("sticky");
    } else {
      navigation.classList.remove("sticky");
    }
  }, [isIntersecting]);

  useEffect(() => {
    const allLinks = document.querySelectorAll(".LK");
    const sectionHeroEl = sectionHeroRef.current;

    if (allLinks) {
      allLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
          e.preventDefault();

          const href = link.getAttribute("href");
          if (href) {
            if (href !== "#" && href.startsWith("#")) {
              const sectionEl = document.querySelector(href);
              sectionEl.scrollIntoView({ behavior: "smooth" });
            }
          }

          sectionHeroEl.classList.remove("nav-open");
          setIsOpen(() => false);
        });
      });
    }
  }, []);

  return (
    <header
      className={`header ${isOpen ? "nav-open" : ""}`}
      id="home"
      ref={sectionHeroRef}
    >
      <Navigation
        t={t}
        LanguageSwitcher={LanguageSwitcher}
        handleOpen={handleOpen}
        navigationRef={navigationRef}
      />
      <Hero t={t} />
      <MouseScroll />
    </header>
  );
}

export default MainHeader;
