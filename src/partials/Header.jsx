import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../favicon.svg";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  function signInMessage() {
    window.parent.postMessage({ action: `SIGN_IN` }, "https://oberonweb.com");
    console.log(`Send signin/signup type to SIGN_IN`);
  }

  function signUpMessage() {
    window.parent.postMessage({ action: `SIGN_UP` }, "https://oberonweb.com");
    console.log(`Send signin/signup type to SIGN_UP`);
  }

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img className="w-12 h-10" src={logo} alt="SVG logo image" />
              {/* <svg
                className="w-8 h-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="21.152%"
                    cy="86.063%"
                    fx="21.152%"
                    fy="86.063%"
                    r="79.941%"
                    id="header-logo"
                  >
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlnsbx="https://boxy-svg.com"
                  viewBox="8.077 7.778 481.005 481.005"
                >
                  <defs>
                    <style bxfonts="Basic">
                      @import
                      url(https://fonts.googleapis.com/css2?family=Basic%3Aital%2Cwght%400%2C400&amp;display=swap);
                    </style>
                  </defs>
                  <ellipse
                    cx="244.234"
                    cy="252.626"
                    fill="#F39090"
                    rx="236.157"
                    ry="236.157"
                  ></ellipse>
                  <ellipse
                    cx="260.169"
                    cy="236.691"
                    fill="#FFF"
                    paintOrder="fill"
                    rx="228.913"
                    ry="228.913"
                  ></ellipse>
                  <text
                    style={{ whiteSpace: "pre" }}
                    x="95.183"
                    y="323.267"
                    fill="#333"
                    fontFamily="Basic"
                    fontSize="203.5"
                  >
                    OW
                  </text>
                </svg>
                {/* <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" /> */}
              {/* </svg> */}
            </Link>
          </div>
          <h1 className="text-2xl">oberon</h1>
          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <button
                  onClick={signInMessage}
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </button>
              </li>
              <li>
                <button
                  onClick={signUpMessage}
                  className="btn-sm text-gray-200 bg-ow_black-800 hover:bg-gray-800 ml-3"
                >
                  <span>Sign up</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
