import React from "react";
import { Trans, useTranslation } from "react-i18next";
import "./blog.css";

const Blog = () => {
  return (
    <div className="block">
      <div className="second-title">blog</div>
      <div className="text">
        <div className="line-block">
          <div className="line" />
        </div>
        <p className="second-text">
          <Trans i18nKey="blog.text">
            This project deals with the phenomenon of sexual relationship
            between humanoid sex robots and humans and the issues these cause
            for feminism. Female-looking sex robots strengthen the
            objectification of women* by representing them.
            <br />
            <br />
            The goal is to raise awareness of the negative impact of this new
            technological progress on women* in order to definitively dehumanize
            sex robots.
            <br />
            <br />
            This project is implemented through a song with an accompanying
            video and a cross media campaign. It will address various groups
            throughout society, since sharing platforms like Youtube and TikTok
            make music freely accessible around the world. The target group is
            society, media and politics.
            <br />
            <br />
            This problem needs to be addressed now so as to be able to influence
            the pernicious development of this kind of artificial intelligence
            (AI).
          </Trans>
        </p>
      </div>
    </div>
  );
};

export default Blog;
