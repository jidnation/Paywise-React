import styled from "styled-components"

export const Card = styled.div`
    background-color: ${props => props.fillColor || "white"};
    color: ${props => props.color || "black"};
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
`