import { TodoItem } from "../hooks/use-todos";
import TodoListItem from "./TodoListItem";

type TodoListProps = {
  todos: Array<TodoItem>;
  editTodo: (targetIndex: number, item: TodoItem) => void;
  deleteTodo: (targetIndex: number) => void;
};

function TodoList({ todos, editTodo, deleteTodo }: TodoListProps) {
  return (
    <ul className="flex flex-col gap-2 ">
      {todos.map((item, i) => (
        <TodoListItem
          // eslint-disable-next-line react/no-array-index-key
          key={`${item.text}${i}`}
          item={item}
          index={i}
          editItem={(newItem) => editTodo(i, newItem)}
          deleteItem={() => deleteTodo(i)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
