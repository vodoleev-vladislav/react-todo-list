import TodoList from "./components/TodoList";
import AddTodoInput from "./components/AddTodoInput";
import { useTodos } from "./hooks/use-todos";
import "./index.css";

const startTodos = [
  { text: "Buy milk", done: true },
  { text: "Buy bread", done: false },
];

export default function App() {
  const { todos, addTodo, editTodo, deleteTodo } = useTodos(startTodos);

  return (
    <div className="p-16 flex flex-col gap-8">
      <AddTodoInput addTodo={addTodo} />
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
