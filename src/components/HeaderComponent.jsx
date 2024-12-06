import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = ({ title, handsAll }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="bg-primary">
        <div className="relative flex items-center h-screen max-w-screen-xl px-4 mx-auto py-30">
          <div
            className={`absolute top-0 left-0 right-0 flex items-center justify-between w-full z-50 px-4 py-4 transition-all duration-300 ${
              isSticky ? "bg-white shadow-md py-2" : ""
            }`}
          >
            <Link to="/">
              <img className="w-24" src="src/assets/image/LogoNav.png" alt="" />
            </Link>
            <button onClick={toggleMenu}>
              <img
                className="w-10"
                src="src/assets/image/Hamburger.png"
                alt=""
              />
            </button>
          </div>

          {isMenuOpen && (
            <div className="absolute z-40 px-10 py-2 bg-white rounded shadow-md top-14 right-12">
              <Link to="/" className="block py-1 hover:font-bold">
                Home
              </Link>
              <Link to="/about" className="block py-1 hover:font-bold ">
                About
              </Link>
              <Link to="/contact" className="block py-1 hover:font-bold">
                Contact
              </Link>
              <Link to="/blog" className="block py-1 hover:font-bold">
                Blog
              </Link>
            </div>
          )}

          <div className="z-20 max-w-3xl mx-auto text-center">
            <h1 className="mb-56 text-3xl font-extrabold font-sansbold sm:text-7xl">
              {title}
            </h1>
          </div>

          {handsAll ? (
            <div>
              <img
                className="absolute mt-5 -translate-x-1/2 bottom-3/1 left-1/2"
                src="src/assets/image/mouse.svg"
                alt=""
              />
              <img
                className="absolute bottom-0 -translate-x-1/2 left-1/2"
                src="src/assets/image/HandsAll.png"
                alt=""
              />
            </div>
          ) : (
            <img
              className="absolute bottom-0 w-1/2 right-7"
              src="src/assets/image/Hands.png"
              alt=""
            />
          )}
        </div>
      </section>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-2 px-4 transition-all duration-300 ${
          isSticky ? " bg-primary shadow-md" : "hidden"
        }`}
      >
        <div className="container flex items-center justify-between mx-auto">
          <Link to="/">
            <img className="w-24" src="src/assets/image/LogoNav.png" alt="" />
          </Link>

          <button onClick={toggleMenu}>
            <img className="w-10" src="src/assets/image/Hamburger.png" alt="" />
          </button>

          {isMenuOpen && (
            <div className="absolute px-10 py-2 bg-white rounded shadow-md top-12 right-32">
              <Link to="/" className="block py-1 hover:font-bold">
                Home
              </Link>
              <Link to="/about" className="block py-1 hover:font-bold ">
                About
              </Link>
              <Link to="/contact" className="block py-1 hover:font-bold">
                Contact
              </Link>
              <Link to="/blog" className="block py-1 hover:font-bold">
                Blog
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  handsAll: PropTypes.bool.isRequired,
};
