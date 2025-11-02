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
      className="flex w-full gap-4 mb-6"
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
        className="flex-1 border border-gray-300 rounded px-3 py-2 shadow-none bg-white"
      />
      <Button type="submit" className="px-6">
        Add
      </Button>
    </form>
  );
};

export default TodoInput;
