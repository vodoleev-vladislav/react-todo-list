import React, { useRef } from "react";

type AddTodoInputProps = {
  addTodo: (text: string) => void;
};

function AddTodoInput({ addTodo }: AddTodoInputProps) {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleOnClick = () => {
    if (!inputRef?.current?.value) return;
    addTodo(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <input
        className="bg-gray-100 rounded p-4 flex-grow flex-shrink-0"
        placeholder="Enter your todo here"
        ref={inputRef}
        data-testid="todoInput"
      />
      <button
        className="p-4 bg-green-300 hover:bg-green-500 rounded"
        type="button"
        onClick={handleOnClick}
        data-testid="todoSubmit"
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodoInput;
