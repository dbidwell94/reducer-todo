import React from "react";
import styled from "styled-components";
import { iTodoItem, iColorProps } from "../../constants";
import TodoItem from "./TodoItem";

type iTodoList = iColorProps & {
  itemList: Array<iTodoItem>;
};

const Container = styled.div<iColorProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export default function TodoList(props: iTodoList) {
  const { itemList } = props;

  return (
    <Container>
      {itemList.map((item) => {
        return <TodoItem todoItem={item} key={item.key} />;
      })}
    </Container>
  );
}
