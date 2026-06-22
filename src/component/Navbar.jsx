import React, { useState } from "react";
import "./Navbar.css";
import { ChevronDown, Clock, MapPin, Phone } from "lucide-react";
import LogoImage from "../assets/img/logo-dark.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  return (
    <>
      <div className="container">
        <div className="top-bar">
          <div className="topbar-close">
            <span
              style={{
                display: "inline-flex",
                alignItem: "center",
                gap: "6px",
              }}
            >
              {" "}
              <MapPin size={14} color="#e8a020" fill="white" />
              10 Dalse House
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItem: "center",
                gap: "6px",
              }}
            >
              {" "}
              <Phone size={14} color="green" fill="white" />
              08084942299
            </span>
          </div>

          <div className="topbar-close">
            <span
              style={{
                display: "inline-flex",
                alignItem: "center",
                gap: "6px",
              }}
            >
              {" "}
              <Clock size={14} color="red" fill="white" />
              Monday-Friday
            </span>
          </div>
        </div>
      </div>

      <div>
        <nav className="Navbar">
          <Link>
            <img src={LogoImage} alt="Logo" className="logo" />
          </Link>

          {/*<p>Lists of Pages</p>*/}
          <ul className="Nav-links">
            <li
              onMouseEnter={() => setOpenMenu("home")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                Home <ChevronDown size={14} />
              </span>
              {openMenu == "home" && (
                
                <ul className="dropdown">
                  <li>
                    <Link to="/">Home 1</Link>
                  </li>
                  <li>
                    <Link to="/home">Home 2</Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              onMouseEnter={() => setOpenMenu("pages")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                Pages <ChevronDown size={14} />
              </span>
              {openMenu == "pages" && (
                <ul className="dropdown">
                  <li>
                    <Link to="/service">Services</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/alumini">Alumini</Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              onMouseEnter={() => setOpenMenu("news")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                News <ChevronDown size={14} />
              </span>
              {openMenu == "news" && (
                <ul className="dropdown">
                  <li><Link to="/new 1">News 1</Link></li>
                  <li><Link to="/new 2">News 2</Link></li>
                </ul>
              )}
            </li>

            <li
              onMouseEnter={() => setOpenMenu("elements")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                Elements <ChevronDown size={14} />
              </span>
              {openMenu == "elements" && (
                <ul className="dropdown">
                  <li><Link to="/topo">topography</Link></li>
                  <li><Link to="bullet">Bullet</Link></li>
                </ul>
              )}
            </li>
            <li>Contact</li>

            <li
              onMouseEnter={() => setOpenMenu("docs")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                Docs <ChevronDown size={14} />
              </span>
              {openMenu == "docs" && (
                <ul className="dropdown">
                  <li><Link to="/">Get Started</Link></li>
                  <li><Link to="/component">Component</Link></li>
                </ul>
              )}
            </li>
          </ul>

          <div>
            <Link to="/purchase" className="purchase-btn">
              purchase
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
