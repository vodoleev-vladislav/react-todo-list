import { useState } from "react";

export type TodoItem = {
  text: string;
  done: boolean;
};

export function useTodos(defaultValue: Array<TodoItem> = []) {
  const [todos, setTodos] = useState(defaultValue);

  const addTodo = (newTodoText: string) =>
    setTodos([{ text: newTodoText, done: false }, ...todos]);

  const editTodo = (targetIndex: number, changedTodo: TodoItem) =>
    setTodos(
      todos.map((item, itemIndex) =>
        targetIndex === itemIndex ? changedTodo : item,
      ),
    );

  const deleteTodo = (targetIndex: number) =>
    setTodos(todos.filter((_, itemIndex) => targetIndex !== itemIndex));

  return {
    todos,
    addTodo,
    editTodo,
    deleteTodo,
  };
}
