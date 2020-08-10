import { v4 as uuid } from "uuid";

export type iColorProps = {
  baseColor?: string;
  fontColor?: string;
  background?: string;
};

export type iTodoItem = {
  title: string;
  date: string;
  isCompleted: boolean;
  key: string;
};

export type iState = {
  todoItems: Array<iTodoItem>;
};

type iAction = {
  type: "ADD_NEW_TODO_ITEM" | "REMOVE_TODO_ITEM" | "TOGGLE_COMPLETED";
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

export function removeTodoItem(item: iTodoItem): iAction {
  return {
    payload: item,
    type: "REMOVE_TODO_ITEM",
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
      const deletedObj: iTodoItem = action.payload as iTodoItem;
      return {
        ...state,
        todoItems: state.todoItems.filter((item) => {
          return item.key !== deletedObj.key;
        }),
      };
    case "TOGGLE_COMPLETED":
      const logicObj: iTodoItem = action.payload as iTodoItem;
      return {
        ...state,
        todoItems: state.todoItems.map((item) => {
          if (item.key === logicObj.key) {
            return { ...item, isCompleted: !item.isCompleted };
          } else return item;
        }),
      };
    default:
      return state;
  }
}
