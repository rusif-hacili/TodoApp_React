import { useContext } from "react";
import TodoItem from "./TodoItem";
import { todoContext } from "../contexts/TodoApp";


function TodoList() {

  const [state, dispatch] = useContext(todoContext);

  return (
    <>
      <div>
        {Object.values(state.todos).filter(todo => (state.show === 'active' && todo.isActive) || (state.show === 'completed'
          && !todo.isActive) || (state.show === "all")).map((todo, index) => (
            <TodoItem {...todo} key={`key-${todo}-${index}`} />
          ))}
      </div>
    </>
  );
}
export default TodoList;