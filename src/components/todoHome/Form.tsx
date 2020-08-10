import React, { useState } from "react";
import styled from "styled-components";
import { iColorProps, iRawTodoItem } from "../../constants";

type submitFunc = {
  (item: iRawTodoItem, callBack?: Function): void;
};

type iRemoveCompletedFunc = {
  (cb?: Function): void;
};

type iFormProps = iColorProps & {
  onSubmit: submitFunc;
  removeCompleted: iRemoveCompletedFunc;
};

const Container = styled.form<iColorProps>`
  display: grid;
  grid-template-columns: 15rem auto;
  grid-gap: 2rem;
  label {
    grid-column: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
  }
  input,
  select {
    grid-column: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    text-align: center;
  }
  button {
    &:nth-of-type(1) {
      grid-column: 1;
    }
    &:nth-of-type(2) {
      grid-column: 2;
    }
  }
`;

const initialFormValues = {
  item: "",
  date: "",
};

export default function Form(props: iFormProps) {
  const [values, setValues] = useState(initialFormValues);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const { removeCompleted } = props;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const rawItem: iRawTodoItem = {
      date: values.date,
      title: values.item,
    };
    props.onSubmit(rawItem, () => {
      setValues(initialFormValues);
    });
  }

  function handleCompleted(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    removeCompleted();
  }

  return (
    <Container onSubmit={onSubmit}>
      <label htmlFor="newItem">New Item</label>
      <input id="newItem" name="item" value={values.item} onChange={onChange} />
      <label htmlFor="dateDue">Due Date</label>
      <input
        type="date"
        id="dateDue"
        name="date"
        value={values.date}
        onChange={onChange}
      />
      <button type="submit">Submit</button>
      <button onClick={handleCompleted}>Remove Completed</button>
    </Container>
  );
}
