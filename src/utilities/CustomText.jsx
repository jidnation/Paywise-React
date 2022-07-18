import styled from "styled-components";

export const CustomText = styled.h3`
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.size || "1em"};
  font-weight: ${(props) => props.weight || "400"};
`;



export const Heading = styled.h1`
  font-size: ${(props) => props.size || "1.5em"};
  color: ${(props) => props.color || "#309975"};
  
`;

