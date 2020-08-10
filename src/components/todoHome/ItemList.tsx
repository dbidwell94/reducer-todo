import React from "react";
import styled from "styled-components";
import { iTodoItem, iColorProps } from "../../constants";
import TodoItem from "./TodoItem";

type iItemFunction = {
  (item: iTodoItem, callback?: Function): void;
};

type iTodoList = iColorProps & {
  itemList: Array<iTodoItem>;
  removeItem: iItemFunction;
  toggleItem: iItemFunction;
};

const Container = styled.div<iColorProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  width: 100%;
`;

export default function TodoList(props: iTodoList) {
  const { itemList, removeItem, toggleItem } = props;

  return (
    <Container>
      {itemList.map((item) => {
        return (
          <TodoItem
            todoItem={item}
            key={item.key}
            removeItem={removeItem}
            background={item.isCompleted ? "green" : "whitesmoke"}
            toggleItem={toggleItem}
          />
        );
      })}
    </Container>
  );
}
