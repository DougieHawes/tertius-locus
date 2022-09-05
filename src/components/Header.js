import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [state, setState] = useState({
    onHome: true,
    onAbout: false,
    onGallery: false,
    onMailList: false,
    onContact: false,
    screenHeight: window.screen.availHeight,
  });

  const { onHome, onAbout, onGallery, onMailList, onContact, screenHeight } =
    state;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const downScroll = window.scrollY;

      console.log(downScroll);

      // if (downScroll < screenHeight) {
      //   setState({
      //     onHome: true,
      //     onAbout: false,
      //     onGallery: false,
      //     onMailList: false,
      //     onContact: false,
      //     screenHeight,
      //   });
      // } else if (downScroll >= screenHeight && downScroll < screenHeight * 2) {
      //   setState({
      //     onHome: false,
      //     onAbout: true,
      //     onGallery: false,
      //     onMailList: false,
      //     onContact: false,
      //     screenHeight,
      //   });
      // } else if (
      //   downScroll >= screenHeight * 2 &&
      //   downScroll < screenHeight * 3
      // ) {
      //   setState({
      //     onHome: false,
      //     onAbout: false,
      //     onGallery: true,
      //     onMailList: false,
      //     onContact: false,
      //     screenHeight,
      //   });
      // } else if (
      //   downScroll >= screenHeight * 3 &&
      //   downScroll < screenHeight * 3 + 205
      // ) {
      //   setState({
      //     onHome: false,
      //     onAbout: false,
      //     onGallery: false,
      //     onMailList: true,
      //     onContact: false,
      //     screenHeight,
      //   });
      // } else if (downScroll >= screenHeight * 3) {
      //   setState({
      //     onHome: false,
      //     onAbout: false,
      //     onGallery: false,
      //     onMailList: false,
      //     onContact: true,
      //     screenHeight,
      //   });
      // }
    });
  }, []);

  return (
    <header className="header">
      <Link to="test1" smooth={true} duration={420}>
        <h1 className="header-title">Tertius Locus</h1>
        <p className="header-subtitle">the common ground</p>
      </Link>
      <nav className="navbar">
        <Link
          className={`header-link ${onHome && "header-link-active"}`}
          to="test1"
          smooth={true}
          duration={420}
        >
          Home
        </Link>
        <Link
          className={`header-link ${onAbout && "header-link-active"}`}
          to="test2"
          smooth={true}
          duration={420}
        >
          About
        </Link>
        <Link
          className={`header-link ${onGallery && "header-link-active"}`}
          to="test3"
          smooth={true}
          duration={420}
        >
          Gallery
        </Link>
        <Link
          className={`header-link ${onMailList && "header-link-active"}`}
          to="test4"
          smooth={true}
          duration={420}
        >
          Mailing-list
        </Link>
        <Link
          className={`header-link ${onContact && "header-link-active"}`}
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
