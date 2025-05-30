import { useState, useCallback } from "react";

import { useIsMobile } from "./hooks/useIsMobile";

import {
  NAV_LINKS,
  LEARN_MORE_LABEL,
  HERO_BANNER_CONTENT,
} from "./constants/contentConfig";
import "./App.scss";

function BasketIcon(props) {
  return (
    <svg
      width={24}
      height={20}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.23358 18.1817C9.23358 17.173 8.41124 16.3633 7.38685 16.3633C6.36248 16.3633 5.54012 17.173 5.54012 18.1817C5.54012 19.1903 6.36248 20 7.38685 20C8.41124 20 9.23358 19.1903 9.23358 18.1817ZM22.1607 18.1817C22.1607 17.173 21.3383 16.3633 20.3139 16.3633C19.2895 16.3633 18.4672 17.173 18.4672 18.1817C18.4672 19.1903 19.2895 20 20.3139 20C21.3383 20 22.1607 19.1903 22.1607 18.1817ZM24.0074 2.72726C24.0074 2.22994 23.589 1.8182 23.084 1.8182H5.75655C5.61231 1.13632 5.59781 0 4.6168 0H0.923317C0.418371 0 0 0.411965 0 0.90892C0 1.40621 0.418371 1.8182 0.923317 1.8182H3.86656L6.42024 13.5085C6.21824 13.9201 5.54012 15.0141 5.54012 15.4544C5.54012 15.9517 5.95851 16.3633 6.46353 16.3633H21.2373C21.7423 16.3633 22.1607 15.9517 22.1607 15.4544C22.1607 14.9574 21.7423 14.5453 21.2373 14.5453H7.96399C8.10823 14.2612 8.31026 13.9628 8.31026 13.6364C8.31026 13.3095 8.18035 12.9547 8.12266 12.6418L23.185 10.9092C23.6611 10.8522 24.0074 10.4545 24.0074 9.99974V2.72726Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="linear-gradient-basket-icon"
          x1="8"
          y1="4"
          x2="19"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EBFF00" />
          <stop offset="1" stopColor="#FF70D9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MenuLinks({ direction = "row" }) {
  return (
    <ul className={`menu menu--${direction}`}>
      {NAV_LINKS.map((nav) => (
        <li className="menu__item" key={nav.id + direction}>
          {nav.label}
        </li>
      ))}
      <li className="menu__item">
        <BasketIcon className="menu__basket-icon" />
      </li>
    </ul>
  );
}

function BurgerMenu({ isOpen, onClick }) {
  return (
    <>
      <button
        className={`burger ${isOpen ? "burger--open" : ""}`}
        onClick={onClick}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </button>

      <nav
        className={`burger__nav ${isOpen ? "burger__nav--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <MenuLinks direction="column" />
      </nav>
    </>
  );
}

function Header() {
  const isMobile = useIsMobile();

  const [isBurgerOpen, toggleBurger] = useState(false);
  const onBurgerClick = useCallback(() => {
    toggleBurger((prev) => !prev);
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <img
            src="logo.svg"
            className="header__logo"
            alt="logo"
            width={104}
            height={35}
          />
        </div>

        {isMobile ? (
          <BurgerMenu isOpen={isBurgerOpen} onClick={onBurgerClick} />
        ) : (
          <nav className="header__nav">
            <MenuLinks />
          </nav>
        )}
      </div>
    </header>
  );
}

function Button({ variant = "filled", label, className = "" }) {
  return (
    <button className={`button button--${variant} ${className}`}>
      {label}
    </button>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-banner">
          <div className="hero-banner__container">
            <div className="hero-banner__content">
              <h1 className="hero-banner__title">
                {HERO_BANNER_CONTENT.title}
                <span className="hero-banner__title--highlight">
                  {HERO_BANNER_CONTENT.title_highlight}
                </span>
              </h1>
              <h3 className="hero-banner__subtitle">
                {HERO_BANNER_CONTENT.subtitle}
                <span className="hero-banner__subtitle--highlight">
                  {HERO_BANNER_CONTENT.subtitle_highlight}
                </span>
              </h3>
              <Button label={LEARN_MORE_LABEL} />
            </div>
          </div>
        </section>
        <div className="content-container">
          <section>Cards</section>
          <section>Read more</section>
        </div>
      </main>
    </>
  );
}

export default App;
