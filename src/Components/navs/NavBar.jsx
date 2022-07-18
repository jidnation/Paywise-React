import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../utilities/Button";
import classes from "./NavBar.module.css";

const link = ({ children, className, goto }) => (
  <a className={className} href={goto}>
    {children}
  </a>
);

const StyledLink = styled(link)`
  color: white;
  font-size: 1.3em;
  font-weight: 400;
  padding: 0.3em;

  &.active {
    position: relative;
    &:after {
      position: absolute;
      content: ""; /* This is necessary for the pseudo element to work. */
      display: block; //This will put the pseudo element on its own line.
      margin: 0 1px; /* This will center the border. */
      width: 50%; /* Change this to whatever width you want. */
      /* padding-top: 20px; This creates some space between the element and the border. */
      border-bottom: 1px solid #dad873; /* This creates the border. Replace black with whatever color you want. */
    }
  }

  & + & {
    margin-left: 1.2em;
  }
`;

function NavBar() {
  return (
    <>
      <div className={classes["nav-flex"]}>
        <div className={classes["center-section"]}>
          <StyledLink className="active">Home</StyledLink>
          <StyledLink>Features</StyledLink>
          <StyledLink>Cards</StyledLink>
          <StyledLink>Contact</StyledLink>
        </div>
        <div className={classes["right-nav"]}>
          <StyledLink>Login</StyledLink>
          <StyledButton primary medium>Sign Up</StyledButton>
        </div>
      </div>
    </>
  );
}

export default NavBar;
