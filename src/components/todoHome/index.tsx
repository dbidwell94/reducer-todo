import React, { useReducer } from "react";
import styled from "styled-components";
import { iColorProps } from "../../constants";
import Form from "./Form";
import ItemList from "./ItemList";
import { addTodoItem, reducer, iRawTodoItem, iState } from "../../constants";

type iHomeProps = iColorProps & {};

const initialState: iState = {
  todoItems: [
    {
      date: "2020-08-28",
      title: "test",
      isCompleted: false,
      key: "de64747d-b2dd-4baa-a316-318b344a51f7",
    },
  ],
};

export default function Home(props: iHomeProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addItem(item: iRawTodoItem, callBack?: Function) {
    dispatch(addTodoItem(item));
    if (callBack) {
      callBack();
    }
  }

  return (
    <React.Fragment>
      <Form onSubmit={addItem} />
      <ItemList itemList={state.todoItems} />
    </React.Fragment>
  );
}
