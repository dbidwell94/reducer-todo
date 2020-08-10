import React, { useReducer } from "react";
import styled from "styled-components";
import { iColorProps } from "../../constants";
import Form from "./Form";
import { addTodoItem, reducer, iRawTodoItem, iState } from "../../constants";

type iHomeProps = iColorProps & {};

const initialState: iState = {
  todoItems: [],
};

export default function Home(props: iHomeProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addItem(item: iRawTodoItem) {
    dispatch(addTodoItem(item));
  }

  return <Form onSubmit={addItem}/>;
}
