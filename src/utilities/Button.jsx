import styled, {css} from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.fillColor || "#dad873"};
  color: ${props => props.color || "black"};
  border: none;
  padding: 0.5em 0.5em;
  border-radius: 3px;
  font-size: 10px;

  ${(props) =>
    props.primary &&
    css`
      color: #309975;
    `}

    ${props => props.big && css`
        min-width: 120px;
        min-height: 40px;
        font-size: 1.2em;
        border-radius: 5px;
    `}
    ${props => props.small && css`
        min-width: 80px;
        min-height: 30px;
    `}
    ${props => props.medium && css`
        min-width: 100px;
        min-height: 35px;
        font-size: 0.7em;
        font-weight: 500;
    `}
    ${props => props.shadow && css`
        box-shadow: 0px 4px 4px rgba(0,0,0,0.15);
    `}
`;
