import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.svg";
import dropdown from "../images/dropdown.png";
import dot from "../images/dot.svg";
import world from "../images/world.png";
import close from "../images/close.png";

const Navbar = () => {
  const [value, setvalue] = useState("block");

  return (
    <div className="nav">
      <span
        className="remove"
        style={{ display: value }}
        onClick={() => {
          setvalue("none");
        }}
      >
        x
      </span>
      <a className="all" href="https://wa.link/ibkf23">
        <p className="WARNING" style={{ display: value }}>
          SAY NO TO PLAGIARISM/FRAUD
          <br />
          <span className="danger">⚠⚠⚠ </span> ACTUAL DEVELOPER FIVERR USERNAME
          IS FRONTENDEGR OR CLICK ON THIS
          <a href="https://wa.link/ibkf23" className="wtcolor">
            LINK
          </a>
          TO CHAT DIRECTLY WITH HIM ON
          <a href="https://wa.link/ibkf23" className="wtcolor">
            WHATSAPP{" "}
          </a>
          <span className="danger"> ⚠⚠⚠ </span>
        </p>
      </a>
      <div className="nav2">
        <img src={logo} alt="" className="navimg1" />
        <div className="menu1">
          <section className="con">
            <img src={dot} alt="" className="navimg2" />
            <p className="navp">Getting started</p>
            <img src={dropdown} alt="" className="navimg3" />
          </section>

          <section className="con">
            <img src="" alt="" className="navimg2" />
            <p className="navp">Media</p>
            <img src="" alt="" className="navimg3" />
          </section>

          <section className="con">
            <img src="" alt="" className="navimg2" />
            <p className="navp">Docs</p>
            <img src={dropdown} alt="" className="navimg3" />
          </section>
        </div>
        <div className="menu2">
          <section className="con1">
            <img src={world} alt="" className="navim" />
            <p className="navp">EN</p>
            <img src={dropdown} alt="" className="navim" />
          </section>

          <section className="con">
            <img src="" alt="" className="navimg2" />
            <p className="navp">Connect</p>
            <img src={close} alt="" className="navimg3" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
