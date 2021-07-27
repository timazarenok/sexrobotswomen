import React from "react";
import { Row, Image, Col } from "react-bootstrap";
import foto from "./mainfoto.jpg";

import "./main.css";

const Main = () => {
  return (
    <div className="main-block">
      <Image className="main-photo" src={foto} alt="main-photo" />
      <div className="text">
        <div className="main-title"> SEX ROBOTS WOMEN* </div>
        <div className="main-subtitle">{"future & taboo"}</div>
      </div>
    </div>
  );
};

export default Main;
