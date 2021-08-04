import React from "react";
import { Image } from "react-bootstrap";
import email from "./email icon.png";
import eff from "./eff.png";
import foxlane from "./foxlane.png";
import kulturhaus from "./kulturhaus.png";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="second-block">
      <div className="second-title">{t("contact.header")}</div>
      <div className="second-text">
        <p className="email-text">
          <Image className="email-logo" src={email} alt="email-contacts" />
          sexrobotswomen@pm.com
        </p>
        <div className="line-block-contacts">
          <div className="line" />
        </div>
        <p className="contacts-text">{t("contact.text")}</p>
        <div className="images">
          <Image src={eff} alt="eff" />
          <Image src={foxlane} alt="foxlane" />
          <Image className="kulturhaus" src={kulturhaus} alt="kulturhaus" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
