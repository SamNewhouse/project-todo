import React, { useState } from "react";
import TextInput from "../1-atoms/TextInput";
import Button from "../1-atoms/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/projectsSlice";

interface TodoInputProps {
  projectId: string;
}

const TodoInput: React.FC<TodoInputProps> = ({ projectId }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (value.trim()) {
      const todo = {
        id: Math.random().toString(36).slice(2, 11),
        text: value,
        completed: false,
      };
      dispatch(addTodo({ projectId, todo }));
      setValue("");
    }
  };

  return (
    <form
      className="flex w-full gap-3 mb-8 flex-col md:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd();
      }}
    >
      <TextInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Add a todo..."
        className="border border-gray-300 rounded px-5 py-4 text-lg shadow-none bg-white flex-1 md:w-auto md:text-base md:px-3 md:py-2"
      />
      <Button type="submit" className="md:w-auto md:text-base md:px-8">
        Add
      </Button>
    </form>
  );
};

export default TodoInput;
