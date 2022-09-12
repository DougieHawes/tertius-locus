import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import monkeyLogo from "../components/media/monkey.svg";
import coffeeLogo from "../components/media/coffee.svg";

const Header = () => {
  const [state, setState] = useState({
    homeActive: true,
    aboutActive: false,
    galleryActive: false,
    mailingListActive: false,
    contactActive: false,
  });

  const {
    homeActive,
    aboutActive,
    galleryActive,
    mailingListActive,
    contactActive,
  } = state;

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset < window.innerHeight) {
          setState({
            homeActive: true,
            aboutActive: false,
            galleryActive: false,
            mailingListActive: false,
            contactActive: false,
          });
        } else if (window.pageYOffset < window.innerHeight * 2) {
          setState({
            homeActive: false,
            aboutActive: true,
            galleryActive: false,
            mailingListActive: false,
            contactActive: false,
          });
        } else if (window.pageYOffset < window.innerHeight * 3) {
          setState({
            homeActive: false,
            aboutActive: false,
            galleryActive: true,
            mailingListActive: false,
            contactActive: false,
          });
        } else if (window.pageYOffset < window.innerHeight * 4) {
          setState({
            homeActive: false,
            aboutActive: false,
            galleryActive: false,
            mailingListActive: true,
            contactActive: false,
          });
        } else {
          setState({
            homeActive: false,
            aboutActive: false,
            galleryActive: false,
            mailingListActive: false,
            contactActive: true,
          });
        }
      });
    }
    watchScroll();
  }, []);

  return (
    <header className="header">
      <Link to="test1" smooth={true} duration={420}>
        <div className="header-title-box">
          <div className="header-title-box-left">
            <img className="header-logo" src={monkeyLogo} alt="monkey logo" />
          </div>
          <div className="header-title-text">
            <h1 className="header-title">Tertius Locus</h1>
            <p className="header-subtitle">the common ground</p>
          </div>
          <div className="header-title-box-right">
            <img className="header-logo" src={coffeeLogo} alt="coffee logo" />
          </div>
        </div>
      </Link>
      <nav className="navbar">
        <Link
          className={`header-link ${homeActive && "active"}`}
          to="test1"
          smooth={true}
          duration={420}
        >
          Home
        </Link>
        <Link
          className={`header-link ${aboutActive && "active"}`}
          to="test2"
          smooth={true}
          duration={420}
        >
          About
        </Link>
        <Link
          className={`header-link ${galleryActive && "active"}`}
          to="test3"
          smooth={true}
          duration={420}
        >
          Gallery
        </Link>
        <Link
          className={`header-link ${mailingListActive && "active"}`}
          to="test4"
          smooth={true}
          duration={420}
        >
          Mailing-list
        </Link>
        <Link
          className={`header-link ${contactActive && "active"}`}
          to="test5"
          smooth={true}
          duration={420}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
