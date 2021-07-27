import React, { useState, useEffect } from "react";
import { Navbar, Nav, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import inst from "../instagram.png";
import twitter from "../twitter.png";
import { useTranslation } from "react-i18next";

const HeaderItems = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    console.log(i18n.language);
  };

  const [hover, setHover] = useState({
    whatwedo: false,
    whoweare: false,
    blog: false,
    contact: false,
  });

  useEffect(() => {}, [hover]);

  const changeHover = (event) => {
    setHover({ ...hover, [event.target.name]: !hover[event.target.name] });
  };

  return (
    <Navbar className="justify-content-end">
      <Nav className="mr-sm-2">
        <Nav.Item>
          <Link
            to="/what-we-do"
            name="whatwedo"
            onMouseOver={changeHover}
            onMouseOut={changeHover}
          >
            {t("header.first")}
          </Link>
          {hover.whatwedo ? <div className="point" /> : null}
        </Nav.Item>
        <Nav.Item>
          <Link
            to="/who-we-are"
            onMouseOver={changeHover}
            name="whoweare"
            onMouseOut={changeHover}
          >
            {t("header.second")}
          </Link>
          {hover.whoweare ? <div className="point" /> : null}
        </Nav.Item>
        <Nav.Item>
          <Link
            to="/blog"
            name="blog"
            onMouseOver={changeHover}
            onMouseOut={changeHover}
          >
            {t("header.third")}
          </Link>
          {hover.blog ? <div className="point" /> : null}
        </Nav.Item>
        <Nav.Item>
          <Link
            to="/contact"
            onMouseOver={changeHover}
            name="contact"
            onMouseOut={changeHover}
          >
            {t("header.fouth")}
          </Link>
          {hover.contact ? <div className="point" /> : null}
        </Nav.Item>
      </Nav>
      <div className="language-block">
        {i18n.language === "en" ? (
          <Button
            className="language-button"
            onClick={() => changeLanguage("de")}
          >
            DE
          </Button>
        ) : (
          <Button
            className="language-button"
            onClick={() => changeLanguage("en")}
          >
            EN
          </Button>
        )}
        <div className="social">
          <Image src={inst} alt="instagram" />
        </div>
        <div className="social">
          <Image src={twitter} alt="twitter" />
        </div>
      </div>
    </Navbar>
  );
};

export default HeaderItems;
