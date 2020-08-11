import React from "react";
import styled from "styled-components";
import { iColorProps } from "../constants";
import { Link } from "react-router-dom";

type iNavbarProps = iColorProps & {};

const Container = styled.nav<iColorProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${(props) =>
    props.background ? props.background : "whitesmoke"};
  color: ${(props) => (props.fontColor ? props.fontColor : "black")};
  box-shadow: 0rem 0rem 0.5rem 0rem black;
  width: 100%;
  height: 7rem;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0rem 50rem;
  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
      color: ${(props) => (props.fontColor ? props.fontColor : "black")};
    }
  }
`;

export default function Navbar(props: iNavbarProps) {
  return (
    <Container fontColor="rgb(100, 150, 50)" background="black">
      <div className="title">
        <h1>Todo</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
      </div>
    </Container>
  );
}
