import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinksRef = useRef(null);
  const menuBtnRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const navLinks = navLinksRef.current;
    const menuBtnIcon = menuBtnRef.current.querySelector("i");

    if (isOpen) {
      navLinks.classList.add("open");
      menuBtnIcon.setAttribute("class", "ri-close-line");
    } else {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    }

    return () => {
      // Cleanup if needed
      navLinks.classList.remove("open");
    };
  }, [isOpen]);

  return (
    <nav>
      <div className="nav__bar">
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">GK</a>
          </div>
          <div
            className="nav__menu__btn"
            id="menu-btn"
            onClick={handleClick}
            ref={menuBtnRef}
          >
            <i className="ri-menu-line"></i>
          </div>
        </div>
        <ul className="nav__links" id="nav-links" ref={navLinksRef}>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#experience">Experiences</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
