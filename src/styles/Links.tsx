import styled from "styled-components";

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
  padding: 0 30px;

  & a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    border-bottom: 0px solid #000;
    transition: all 150ms ease-in-out;
  }

  & a:hover, & a.active {
    border-bottom: 3px solid #000;
    font-size: 1.1em;
  }
`;