import { v4 as uuid } from "uuid";

export type iColorProps = {
  baseColor?: string;
  fontColor?: string;
  background?: string;
};

type iTodoItem = {
  title: string;
  date: string;
  isCompleted: boolean;
  key: string;
};

export type iState = {
  todoItems: Array<iTodoItem>;
};

type iAction = {
  type: "ADD_NEW_TODO_ITEM" | "REMOVE_TODO_ITEM";
  payload: iTodoItem | string | number | boolean | null | undefined;
};

export type iRawTodoItem = {
  title: string;
  date: string;
};

export function addTodoItem(item: iRawTodoItem): iAction {
  const toReturn: iTodoItem = {
    date: item.date,
    title: item.title,
    isCompleted: false,
    key: uuid(),
  };
  return {
    payload: toReturn,
    type: "ADD_NEW_TODO_ITEM",
  };
}

export function reducer(state: iState, action: iAction): iState {
  switch (action.type) {
    case "ADD_NEW_TODO_ITEM":
      return {
        ...state,
        todoItems: [action.payload as iTodoItem, ...state.todoItems],
      };
    case "REMOVE_TODO_ITEM":
      return state;
    default:
      return state;
  }
}
