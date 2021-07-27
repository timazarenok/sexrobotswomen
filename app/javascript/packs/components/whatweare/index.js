import React from "react";
import { Image } from "react-bootstrap";
import "./whatweare.css";
import eva from "./eva.png";
import email from "./email icon.png";
import { Trans, useTranslation } from "react-i18next";

import Stefan from "./stefan-component";

const Whatweare = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="block">
        <div className="first-person">
          <div className="are-title">{t("who.title")}</div>
          <div className="line-block-person">
            <div className="line" />
          </div>
          <div className="second-line-block-person">
            <div className="second-line" />
          </div>
          <Image className="person-foto" src={eva} alt="eva" />
          <p className="person-name">
            <span className="name">{t("who.person.name")}</span>
            <br /> {t("who.person.position")}
          </p>
          <p className="person-email">
            <Image src={email} alt="email" />
            {t("who.person.email")}
          </p>
        </div>
        <p className="what-we-are-text">
          <Trans
            i18nKey="who.person.description"
            data-i18n="[html]who.person.description"
          >
            Project management and participation in "Sex, Robots, Women* -
            Future and Taboo"
            <code />
            <code className="subtext">
              since April 2021 @ erfolgsfaktorFRAU e.V.
            </code>
            <code />
            <code />
            Project participation "Women* and Artificial Intelligence - Changes
            in Gender Policy through New Technologies"
            <code />
            <code className="subtext">
              Feb.- May 2021 @ erfolgsfaktorFRAU e.V.
            </code>
            <code />
            <code />
            Unit-Owner Business Unit Digital Transformation <code />
            <code className="subtext">Sep. 2020 - May 2021</code>
            <code />
            and Business Analyst & Requirements Manager <code />
            <code className="subtext">Dec. 2019 - May 2021 @ CodeCamp:N </code>
            <code />
            <code /> Master Thesis: "Artificial Intelligence and Recruiting: An
            Empirical Study of its Ethical Dimensions" <code />
            <code className="subtext">@FAU 2018 - 2019</code>
          </Trans>
        </p>
      </div>
      <div className="block">
        <div className="mobile">
          <Stefan />
        </div>
        <p className="what-we-are-secondtext">
          <Trans
            i18nKey="who.person2.description"
            data-i18n="[html]who.person2.description"
          >
            Project initiation and participation “Sex, Robots, Women* - Future &
            Taboo”
            <br />
            <span className="subtext">
              since April 2021 @ erfolgsfaktorFRAU e.V.
            </span>
            <br />
            <br /> Project initiation and management “Feminism meets AI: On
            Technological Progress and its Impact on Women*, Girls and Trans*
            People”
            <br />
            <span className="subtext">Nov. 2016 - March 2021</span>
            <br />
            <br />
            Artist & Repertoire Representative <br />@ Record Label Fox Lane
            Music
            <br />
            <span className="subtext">since Sept. 2020</span>
            <br />
            <br />
            Project initiation and participation <br />@ Fox Lane Studios
            <br />
            <span className="subtext">since March 2014</span>
          </Trans>
        </p>
        <div className="desktop">
          <Stefan />
        </div>
      </div>
    </>
  );
};

export default Whatweare;
