import React from "react";
import { Image } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";

import stefan from "../stefan.png";
import email from "../email icon.png";
import "../whatweare.css";

const Stefan = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="first-person">
      <div className="line-block-person2">
        <div className="line" />
      </div>
      <div className="second-line-block-person2">
        <div className="second-line" />
      </div>
      <Image className="person2-foto" src={stefan} alt="stefan" />
      <p className="person2-name">
        <span className="name">
          {t("who.person2.name")}
        </span>
        <br /> {t("who.person2.position")}
      </p>
      <p className="person-email">
        <Image src={email} alt="email" />
        {t("who.person2.email")}
      </p>
    </div>
  );
};

export default Stefan;
