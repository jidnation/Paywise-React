import styled, { css } from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.fillColor || "rgba(239, 238, 180, 0.2)"};
  color: ${(props) => props.color || "black"};
  background-image: ${props => props.gradient || 'none'};
  padding: 1.5rem 1rem;
  display: flex;
  width: ${(props) => props.width || "auto"};
  border-radius: 15px;
  flex-direction: column;
  padding: 1em 2em;
  ${(props) =>
    props.shadow &&
    css`
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
    `}
`;
