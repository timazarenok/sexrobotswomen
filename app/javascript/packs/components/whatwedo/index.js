import React, { useState, useEffect } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import "./whatwedo.css";
import pic from "./pic.png";

import { URL } from "../utils";
import styled from 'styled-components'

const Button = styled.button({
  color: 'grey',
});

const Whatwedo = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="second-block">
        <div className="second-title">{t("what we do.title")}</div>
        <div className="text">
          <div className="line-block">
            <div className="line" />
          </div>
          <p className="second-text">
            <Trans i18nKey="what we do.text">
              This project deals with the phenomenon of sexual relationship
              between humanoid sex robots and humans and the issues these cause
              for feminism. Female-looking sex robots strengthen the
              objectification of women* by representing them.
              <code />
              <code />
              The goal is to raise awareness of the negative impact of this new
              technological progress on women* in order to definitively
              dehumanize sex robots.
              <code />
              <code />
              This project is implemented through a song with an accompanying
              video and a cross media campaign. It will address various groups
              throughout society, since sharing platforms like Youtube and
              TikTok make music freely accessible around the world. The target
              group is society, media and politics.
              <code />
              <code />
              This problem needs to be addressed now so as to be able to
              influence the pernicious development of this kind of artificial
              intelligence (AI).
            </Trans>
          </p>
          <Button className="second-button">{t("what we do.button")}</Button>
        </div>
      </div>
      <div className="what-we-do-block">
        <Image className="pic-foto" src={pic} alt="what-we-do" />
        <p className="what-we-do-subtitle">
          SEX ROBOTS WOMEN *
          <br />
          SEX ROBOTS WOMEN *
          <br />
          SEX ROBOTS WOMEN *
          <br />
          SEX ROBOTS WOMEN *
          <br />
          SEX ROBOTS WOMEN *
        </p>
      </div>
    </>
  );
};

export default Whatwedo;
