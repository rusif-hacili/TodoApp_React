import { Outlet } from 'react-router-dom';
import AddTodo from './TodoApp/AddTodo';
import Title from './TodoApp/Title';
import TodoApp from './TodoApp/TodoApp';
import TodoAppControl from './TodoApp/TodoAppControl';




function App() {
  return (
    <>
      <TodoApp>
        <Title>Todo App</Title>

        <AddTodo />

        <Outlet />

        <TodoAppControl />
      </TodoApp>
    </>
  );
}

export default App;
