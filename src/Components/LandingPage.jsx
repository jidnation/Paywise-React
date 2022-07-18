import React from "react";
import { StyledButton } from "../utilities/Button";
import CashInfo from "./CashInfo/CashInfo";
import style from "./LandingPage.module.css";
import Logo from "./Logo/Logo";
import NavBar from "./navs/NavBar";
import backgrd from "../assets/images/bgImg.png"

function LandingPage() {
  return (
    <>
      <div className={style["landing-page"]}>
        <div className={style["top-section"]}>
          <div className={style["top-section-wrapper"]}>
            <div className={style.header}>
              <Logo />
              <NavBar />
            </div>
            <div className={style.body}>
              <div className={style["left-section"]}>
                <div className={style["text-part"]}>
                  <h1 className={style.next}>
                    Your Next Online Bank.
                  </h1>
                  <div className={style.divider}></div>
                  <div className={style["cashInfo-row"]}>
                    <CashInfo label="6X" value="Lorem ipsum dolor sit amet" />
                    <CashInfo label="-15" value="Lorem ipsum dolor sit amet" />
                    <CashInfo label="3M+" value="Lorem ipsum dolor sit amet" />
                  </div>
                </div>
                <div className={style.spacer}>
                <StyledButton primary big className={style.download}>
                  Download Now
                </StyledButton>
                </div>
              </div>
              <div className={style["right-section"]}>
                <img src={backgrd} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
