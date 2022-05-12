import styled from "styled-components";

type H1Props = {
  isNav?: boolean;
}

export const H1 = styled.h1<H1Props>`
  font-size: ${ ({ isNav }) => ( isNav ? "2rem" : "1.5rem" ) };
  font-weight: ${ ({ isNav }) => ( isNav ? "bold" : "normal") };
  color: ${ ({ isNav }) => ( isNav ? "#fff" : "#2d2d2d") };
  margin: 0;
  padding: 0;

  & a {
    text-decoration: none;
    color: inherit;
  }
`;