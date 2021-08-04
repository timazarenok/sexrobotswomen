import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <Nav className="justify-content-center footer-nav">
      <Nav.Item>© 2021 all rights reserved</Nav.Item>
      <Nav.Item>{t("footer.first")}</Nav.Item>
      <Nav.Item>{t("footer.second")}</Nav.Item>
      <div className="desktop">
        <Nav.Item>{"          "}</Nav.Item>
      </div>
      <Nav.Item>instagram</Nav.Item>
    </Nav>
  );
};

export default Footer;
