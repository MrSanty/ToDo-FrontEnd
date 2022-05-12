import React from "react";
import styled from "styled-components";

export const LoginForm = styled.div`
  & > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 350px;
    max-width: 400px;
    margin: 50px auto;
    padding: 50px 40px;
    box-sizing: border-box;
  }

  & > form > h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
    color: #fff;
    text-align: start;
  }

  & > form > label {
    font-size: 1.2rem;
    color: #fff;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  & > form > .error {
    margin-top: 1px;
    font-size: 0.8rem;
    font-weight: bold;
    color: #f00;

    margin-bottom: 10px;
  }

  & > form > .error:last-child {
    margin-bottom: 0;
  }

  & > form > .boton {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
  }

  & > form > .boton > a {
    margin-left: 40px;
    color: #fff;
    text-decoration: none;
  }

  & > form > .boton > a:hover {
    text-decoration: underline;
  }

  & > form > .boton > a:visited {
    color: #fff;
  }
`;