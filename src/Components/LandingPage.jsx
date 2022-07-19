import React from "react";
import { StyledButton } from "../utilities/Button";
import CashInfo from "./CashInfo/CashInfo";
import style from "./LandingPage.module.css";
import Logo from "./Logo/Logo";
import NavBar from "./navs/NavBar";
import backgrd from "../assets/images/bgImg.png";
import ball from "../assets/images/ball.png";
import { CustomText, Heading } from "../utilities/CustomText";
import { Card } from "../utilities/Card";
import { TextInput } from "../utilities/Input";

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
                  <h1 className={style.next}>Your Next Online Bank.</h1>
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
        <div className={style["card-section"]}>
          <Heading size="35px">One Mission. Two cards</Heading>
          <h3 className={style.offer}>
            We are providing our clients two cards for their one mission and
            finance
          </h3>
          <div className={style["card-row"]}>
            <Card shadow>
              <div className={style.btn}>
                <StyledButton medium fillColor="#dad873">
                  Petal 1
                </StyledButton>
              </div>
              <CustomText color="#dad873" size="20px" weight="500">
                Expanding Access
              </CustomText>
              <CustomText color="#dad873" size="20px" weight="500">
                Through Technology.
              </CustomText>
              <ul className={style["prop-list"]}>
                <li className={style.prop}>
                  No annual fee (Late and returned less apply)
                </li>
                <li className={style.prop}> $500 - $5,000 limits</li>
                <li className={style.prop}>ARPs 19.99% - 29.49%</li>
                <li className={style.prop}>
                  2% - 10% cash back at select merchants
                </li>
              </ul>
              <div className={style.btn}>
                <StyledButton medium shadow fillColor="#f8bf88">
                  Learn More
                </StyledButton>
              </div>
              <div className={style["card-box"]}>
                <Card
                  gradient="linear-gradient(180deg, #DAD873 0%, #FFCA63 100%)"
                  width="180px"
                >
                  <Heading color="#20656f" size="15px">
                    VISA
                  </Heading>
                  <div className={style["card-balance"]}>
                    <CustomText color="#20656f" size="11px" weight="500">
                      Total balance
                    </CustomText>
                    <h3 className={style.balance}>$27,000.30</h3>
                  </div>
                </Card>
              </div>
            </Card>
            <Card shadow>
              <div className={style.btn}>
                <StyledButton medium fillColor="#ffcdc2">
                  Petal 2
                </StyledButton>
              </div>
              <CustomText color="#f8bf88" size="20px" weight="500">
                Responsible Credit
              </CustomText>
              <CustomText color="#f8bf88" size="20px" weight="500">
                Without Fees.
              </CustomText>
              <ul className={style["prop-list"]}>
                <li className={style.prop}>
                  No annual fee (Late and returned less apply)
                </li>
                <li className={style.prop}> $500 - $5,000 limits</li>
                <li className={style.prop}>ARPs 19.99% - 29.49%</li>
                <li className={style.prop}>
                  2% - 10% cash back at select merchants
                </li>
              </ul>
              <div className={style.btn}>
                <StyledButton medium shadow fillColor="#f8bf88">
                  Learn More
                </StyledButton>
              </div>
              <div className={style["card-box"]}>
                <Card
                  gradient="linear-gradient(180deg, #FFCDC2 0%, #F88888 100%)"
                  width="180px"
                >
                  <Heading color="#20656f" size="15px">
                    VISA
                  </Heading>
                  <div className={style["card-balance"]}>
                    <CustomText color="#20656f" size="11px" weight="500">
                      Total balance
                    </CustomText>
                    <h3 className={style.balance}>$27,000.30</h3>
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        </div>
        <div className={style["price-change-section"]}>
          <div className={style["price-change-wrapper"]}>
            <div className={style["price-left"]}>
              <div className={style["price-left-wrapper"]}>
                <CustomText weight="500" size="1.5em">
                  Our Online And ATM Exchange Rates
                </CustomText>
                <br />
                <CustomText size="11.5px" weight="300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  perferendis nemo voluptate debitis quo animi tempore quaerat
                  placeat assumenda laborum?.
                </CustomText>
                <div className={style["price-rate-change"]}>
                  <div className={style["price-row"]}>
                    <CustomText size="13px">USD</CustomText>
                    <div className={style["rate-row"]}>
                      <h3 className={style.price}>71,35</h3>
                      icon
                    </div>
                    <div className={style["rate-row"]}>
                      <h3 className={style.price}>71,35</h3>
                      icon
                    </div>
                  </div>
                  <div className={style["price-row"]}>
                    <CustomText size="13px">USD</CustomText>
                    <div className={style["rate-row"]}>
                      <h3 className={style.price}>84,98</h3>
                      icon
                    </div>
                    <div className={style["rate-row"]}>
                      <h3 className={style.price}>85,98</h3>
                      icon
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style["price-right"]}>
              <form className={style["sales-form"]}>
                <div className={style["input-box"]}>
                  <CustomText size="12px" weight="300">
                    i'd like to sell
                  </CustomText>
                  <div className={style["text-box"]}>
                    <TextInput
                      defaultValue="10,000"
                      noBorder
                      width="80%"
                    ></TextInput>
                    <CustomText>RUB</CustomText>
                  </div>
                </div>
                <div className={style["input-box"]}>
                  <CustomText size="12px" weight="300">
                    i'll get
                  </CustomText>
                  <div className={style["text-box"]}>
                    <TextInput
                      defaultValue="112,00"
                      noBorder
                      width="80%"
                    ></TextInput>
                    <CustomText>RUB</CustomText>
                  </div>
                </div>
                <div className="exchange-btn">
                  <StyledButton medium fillColor="#ffca63" color="#20656f">
                    Exchange Money
                  </StyledButton>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={style["services-section"]}>
          <Heading color="#575757">Our Global Services</Heading>
          <div className={style["services-info"]}>
            <CustomText color="#575757" weight="500" size="12px">
              we providing our clients two cards for their one mission and
              finance
            </CustomText>
          </div>
          <div className={style["bank-info-session"]}>
            <div className={style["bank-left-part"]}>
              <div className={style["card-wrapper"]}>
                <Card fillColor="#fff" shadow>
                  <CustomText color="#575757" size="13px" weight="700">
                    Bank Transfer
                  </CustomText>
                  <div className={style["text-wrapper"]}>
                    <CustomText color="#575757" size="10px" weight="500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt labore vitae repellat velit saepe maiores est sequi,
                      provident ad quam eligendi commodi, architecto incidunt
                      beatae?
                    </CustomText>
                  </div>
                </Card>
              </div>
              <div className={style["card-wrapper"]}>
                <Card fillColor="#fff" shadow>
                  <CustomText color="#575757" size="13px" weight="700">
                    Bank Transfer
                  </CustomText>
                  <div className={style["text-wrapper"]}>
                    <CustomText color="#575757" size="10px" weight="500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt labore vitae repellat velit saepe maiores est sequi,
                      provident ad quam eligendi commodi, architecto incidunt
                      beatae?
                    </CustomText>
                  </div>
                </Card>
              </div>
            </div>
            <div className={style["bank-mid-part"]}>
              <div className={style["ball-wrapper"]}>
                <img src={ball} alt={style["world bank"]} />
              </div>
            </div>
            <div className={style["bank-right-part"]}>
              <div className={style["card-wrapper"]}>
                <Card fillColor="#fff" shadow>
                  <CustomText color="#575757" size="13px" weight="700">
                    Bank Transfer
                  </CustomText>
                  <div className={style["text-wrapper"]}>
                    <CustomText color="#575757" size="10px" weight="500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt labore vitae repellat velit saepe maiores est sequi,
                      provident ad quam eligendi commodi, architecto incidunt
                      beatae?
                    </CustomText>
                  </div>
                </Card>
              </div>
              <div className={style["card-wrapper"]}>
                <Card fillColor="#fff" shadow>
                  <CustomText color="#575757" size="13px" weight="700">
                    Bank Transfer
                  </CustomText>
                  <div className={style["text-wrapper"]}>
                    <CustomText color="#575757" size="10px" weight="500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt labore vitae repellat velit saepe maiores est sequi,
                      provident ad quam eligendi commodi, architecto incidunt
                      beatae?
                    </CustomText>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className={style["footer-wrapper"]}>
            <div className={style["footer-body"]}>
              <div className={style.fLeft}>
                <Logo />
                <div className={style.sub}>
                  <CustomText size="13px" weight="500">
                    Subscribe to keep up with the latest news
                  </CustomText>
                </div>
                <div className={style["input-field"]}>
                  <div className={style["email-field"]}>
                    <TextInput
                      placeholder="enter your email..."
                      fillColor="white"
                      small
                    ></TextInput>
                  </div>
                  <div className={style.sendbtn}>icon</div>
                </div>
                <div className={style.agree}>
                  <CustomText size="10px" weight="300">
                    by submitting this form, you acknowledge that you have the
                    terms of our Privacy Statement
                  </CustomText>
                </div>
              </div>
              <div className={style.fRight}>
                <ul className={style.solutions}>
                  <li className={style.tab}>MasterCard</li>
                  <li className={style.tab}>Loius Vuitton</li>
                  <li className={style.tab}>Gillette</li>
                  <li className={style.tab}>Apple</li>
                  <li className={style.tab}>General Electric</li>
                </ul>
                <ul className={style.solutions}>
                  <li className={style.tab}>Home</li>
                  <li className={style.tab}>About</li>
                  <li className={style.tab}>Services</li>
                  <li className={style.tab}>Contact</li>
                  <li className={style.tab}>Terms and Conditions</li>
                </ul>
              </div>
            </div>
            <div className={style["copy-right"]}>
              <CustomText size="9px" weight="300">Copyright @ JidNation 2022</CustomText>
              <div className={style["social-links"]}></div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
