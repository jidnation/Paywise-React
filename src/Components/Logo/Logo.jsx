import React from "react";
import logo from "../../assets/images/logo.png";
import style from "./Logo.module.css";

function Logo() {
  return (
    <>
      <div className={style["logo-wrapper"]}>
        <div className={style.icon}>
          <img src={logo} alt="site-logo" />
        </div>
        <h2 className={style.title}>PAYWISE</h2>
      </div>
    </>
  );
}

export default Logo;
