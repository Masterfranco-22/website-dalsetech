import React from "react";
import "./Navbar.css";
import { Clock, MapPin, Phone } from "lucide-react";

function Navbar() {
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
    </>
  );
}

export default Navbar;
