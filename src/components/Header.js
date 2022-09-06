import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header">
      <Link to="test1" smooth={true} duration={420}>
        <h1 className="header-title">Tertius Locus</h1>
        <p className="header-subtitle">the common ground</p>
      </Link>
      <nav className="navbar">
        <Link className="header-link" to="test1" smooth={true} duration={420}>
          Home
        </Link>
        <Link className="header-link" to="test2" smooth={true} duration={420}>
          About
        </Link>
        <Link className="header-link" to="test3" smooth={true} duration={420}>
          Gallery
        </Link>
        <Link className="header-link" to="test4" smooth={true} duration={420}>
          Mailing-list
        </Link>
        <Link className="header-link" to="test5" smooth={true} duration={420}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
