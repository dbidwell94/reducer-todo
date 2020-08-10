import React, { MouseEvent } from "react";
import styled from "styled-components";
import { iTodoItem, iColorProps } from "../../constants";

type iItemFunction = {
  (item: iTodoItem, callback?: Function): void;
};

type iTodoItemProps = iColorProps & {
  todoItem: iTodoItem;
  removeItem: iItemFunction;
  toggleItem: iItemFunction;
};

const Container = styled.section<iColorProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0rem 2rem;
  padding: 2rem;
  color: ${(props) => (props.fontColor ? props.fontColor : "black")};
  background: ${(props) =>
    props.background ? props.background : "whitesmoke"};
  box-shadow: 0rem 0rem 0.125rem 0rem black;
  border-radius: 1.25rem;
  position: relative;
  div.toggle {
    position: absolute;
    left: calc(100% - 2rem);
    top: 0;
    width: 2rem;
    height: 2rem;
    background: transparent;
    &:before {
      position: absolute;
      left: 0;
      top: 50%;
      content: "";
      border-top: thin solid red;
      transform: rotate(45deg);
      width: 100%;
    }
    &:after {
      position: absolute;
      left: 0;
      top: 50%;
      content: "";
      border-top: thin solid red;
      transform: rotate(-45deg);
      width: 100%;
    }
    &:hover {
      cursor: pointer;
    }
  }
  button {
    margin-top: 1.5rem;
  }
`;

export default function TodoItem(props: iTodoItemProps) {
  const { todoItem, background, fontColor, removeItem, toggleItem } = props;

  function removeItemHandler(e: MouseEvent) {
    e.preventDefault();
    removeItem(todoItem);
  }

  function handleCompleted(e: MouseEvent) {
    e.preventDefault();
    toggleItem(todoItem);
  }

  return (
    <Container background={background} fontColor={fontColor}>
      <div className="toggle" onClick={removeItemHandler} />
      <h2>{todoItem.title}</h2>
      <div className="content">
        <p>Due date: {todoItem.date ? todoItem.date : "Never"}</p>
      </div>
      <button onClick={handleCompleted}>
        {!todoItem.isCompleted ? "Set Completed" : "Just Kidding"}
      </button>
    </Container>
  );
}
