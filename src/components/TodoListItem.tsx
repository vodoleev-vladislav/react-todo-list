import { TodoItem } from "../hooks/use-todos";

type TodoListProps = {
  item: TodoItem;
  index: number;
  editItem: (todoItem: TodoItem) => void;
  deleteItem: () => void;
};

function TodoListItem({ item, index, editItem, deleteItem }: TodoListProps) {
  const id = `${item.text}${index}`;
  const toggleCheckbox = () => editItem({ ...item, done: !item.done });

  return (
    <li className="flex items-center gap-2 p-2 bg-gray-200 rounded">
      <input
        type="checkbox"
        checked={item.done}
        onChange={toggleCheckbox}
        data-testid={`toggle${index}`}
        className="peer"
        id={id}
      />
      <label
        className="peer-checked:line-through"
        htmlFor={id}
        data-testid={`todo${index}`}
      >
        {item.text}
      </label>
      <div className="ml-auto">
        <button
          className="hover:bg-gray-300 p-2 rounded"
          type="button"
          onClick={deleteItem}
          data-testid={`delete${index}`}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoListItem;
