"use client";

import React, { useState } from "react";
import TextInput from "../1-atoms/TextInput";
import Button from "../1-atoms/Button";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addProject } from "../../store/projectsSlice";

const ProjectForm: React.FC = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const id = Math.random().toString(36).slice(2, 11);
    dispatch(addProject({ id, name }));
    setName("");
    router.push(`/project/${id}`);
  };

  return (
    <form className="space-y-3 md:space-y-6 w-full" onSubmit={handleSubmit}>
      <TextInput
        label="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter project name"
        autoFocus
      />
      <Button type="submit" className="w-full">
        Create Project
      </Button>
    </form>
  );
};

export default ProjectForm;
