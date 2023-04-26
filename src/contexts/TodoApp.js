import { createContext, useReducer } from "react";

export const todoContext = createContext();

const initialState = {
  todos: {},
  lastIndex: 0,
  show: "all"

}

function reducer(state, action) {
  switch (action.type) {
    case "add":

      if (!action.payload?.trim()) {
        return state;
      }

      var todos = { ...state.todos };
      var lastIndex = state.lastIndex + 1;
      todos[lastIndex] = {
        task: action.payload,
        id: lastIndex,
        isActive: true,
        isEditable: false,

      }

      return {
        ...state,
        todos,
        lastIndex
      }
    case "remove":
      var todos = { ...state.todos };
      delete todos[action.payload];

      return {
        ...state,
        todos
      }
    case "complete":
      var todos = { ...state.todos };
      todos[action.payload].isActive = false;

      return {
        ...state,
        todos
      }

    case "uncomplete":
      var todos = { ...state.todos };
      todos[action.payload].isActive = true;

      return {
        ...state,
        todos
      }

    case "open_edit_form":
      var todos = { ...state.todos }
      todos[action.payload].isEditable = true;

      return {
        ...state,
        todos
      }

    case "close_edit_form":
      var todos = { ...state.todos };
      todos[action.payload].isEditable = false;

      return {
        ...state,
        todos
      }

    case "save_change":
      var todos = { ...state.todos };
      todos[action.payload.id].task = action.payload.task;
      todos[action.payload.id].isEditable = false;

      return {
        ...state,
        todos
      }

    case "remove_completed_tasks":

      var todos = Object.fromEntries(Object.entries(state.todos || {}).filter(todo => todo.isActive))

      return {
        ...state,
        todos
      }

    case 'show':
      var show = { ...state.show }
      show = action.payload
      return {
        ...state,
        show
      }

    default:
      return state
  }
}

function TodoApp({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <todoContext.Provider value={[state, dispatch]}>
      {children}
    </todoContext.Provider>
  )
}
export default TodoApp;
