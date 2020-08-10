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

  function addItem(item: iRawTodoItem, callBack?:Function) {
    dispatch(addTodoItem(item));
    if(callBack){
        callBack();
    }
  }

  return <Form onSubmit={addItem}/>;
}
