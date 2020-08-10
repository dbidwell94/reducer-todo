import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import { iColorProps } from "../constants";
import Home from './todoHome';

const Body = styled.div<iColorProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

export default (props: any) => {
  return (
    <React.Fragment>
      <Navbar />
      <Body>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Body>
    </React.Fragment>
  );
};
