import React from "react";
import styled from "styled-components";
import { iTodoItem, iColorProps } from "../../constants";

type iTodoItemProps = iColorProps & {
  todoItem: iTodoItem;
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
  div.toggle{
    position: absolute;
    left: 100%;
    top: 0;
  }
`;

export default function TodoItem(props: iTodoItemProps) {
  const { todoItem, background, fontColor } = props;

  return (
    <Container background={background} fontColor={fontColor}>
      <div className="toggle" />
      <h2>{todoItem.title}</h2>
      <div className="content">
        <p>Due date: {todoItem.date}</p>
      </div>
    </Container>
  );
}
