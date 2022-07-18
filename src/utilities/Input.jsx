import styled from "styled-components";

export const TextInput = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: ${(props) => (props.noBorder ? "none" : "1px solid #fff")};
  border-radius: 2px;
  background: none;
  width: ${(props) => props.width || "100%"};
  color: ${(props) => props.color || "white"};
  padding: ${(props) => props.size || "0.5em"};
  outline: none;
`;
