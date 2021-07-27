import React, { useState, useEffect } from "react";

import "./header.css";
import HeaderItems from "./header-items";

const Header = () => {
  const [show, setShow] = useState(false);

  const changeShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="desktop">
        <HeaderItems />
      </div>
      <div className="mobile">
        <ul className="nav navbar">
          <button className="header-burger-button" onClick={() => changeShow()}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </ul>
        {show ? <HeaderItems changeShow={changeShow} /> : null}
      </div>
    </>
  );
};

export default Header;
