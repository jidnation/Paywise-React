import styled from "styled-components";

export const link = ({children, className, goto}) => (
    <a className={className} href={goto}>{children}</a>
)

export const StyledLink = styled(link)`
    color: white;
    font-size: 0.6em;
    font-weight: 400;
`