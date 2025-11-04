"use client";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo, toggleTodo, reorderTodos, Project } from "../../store/projectsSlice";
import TextInput from "../1-atoms/TextInput";
import Checkbox from "../1-atoms/Checkbox";
import CrossIcon from "../1-atoms/icons/CrossIcon";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import DraggableTodo from "../2-molecules/DraggableTodo";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

interface ProjectTodoListProps {
  project: Project;
}

const FLASH_DURATION = 700;

const ProjectTodoList: React.FC<ProjectTodoListProps> = ({ project }) => {
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [flashedId, setFlashedId] = useState<string | null>(null);

  const [todos, setTodos] = useState(project.todos);
  useEffect(() => {
    setTodos(project.todos);
  }, [project.todos]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } }),
  );

  const handleEditStart = (todoId: string, currentText: string) => {
    setEditingId(todoId);
    setEditValue(currentText);
  };

  const handleEditSave = (todoId: string) => {
    if (editValue.trim()) {
      dispatch(editTodo({ projectId: project.id, todoId, newText: editValue }));
      setEditingId(null);
      setEditValue("");
      setFlashedId(todoId);
      setTimeout(() => setFlashedId(null), FLASH_DURATION);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id && over?.id && active.id !== over.id) {
      const oldIndex = todos.findIndex((t) => t.id === active.id);
      const newIndex = todos.findIndex((t) => t.id === over.id);
      const reordered = arrayMove(todos, oldIndex, newIndex);
      setTodos(reordered);
      dispatch(reorderTodos({ projectId: project.id, todos: reordered }));
    }
  };

  return (
    <>
      {todos.length > 0 && (
        <p className="project-todo-list-hint text-stone-400 text-sm mb-2 select-none text-center">
          Double-click a todo to edit
        </p>
      )}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToWindowEdges]}
      >
        <SortableContext items={todos.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          <ul className="project-todo-list-ul w-full space-y-3">
            {todos.map((todo) => {
              const isEditing = editingId === todo.id;
              const isFlashed = flashedId === todo.id;
              return (
                <DraggableTodo
                  key={todo.id}
                  todo={todo}
                  isEditing={isEditing}
                  isFlashed={isFlashed}
                  disabled={isEditing}
                  onDoubleClick={() => !isEditing && handleEditStart(todo.id, todo.text)}
                >
                  <>
                    <div
                      className="project-todo-list-row flex items-center gap-6 flex-1 h-full"
                      onDoubleClick={() => !isEditing && handleEditStart(todo.id, todo.text)}
                    >
                      <Checkbox
                        checked={todo.completed}
                        onChange={() =>
                          dispatch(
                            toggleTodo({
                              projectId: project.id,
                              todoId: todo.id,
                            }),
                          )
                        }
                        onDoubleClick={(e) => e.stopPropagation()}
                        className="project-todo-list-checkbox"
                      />
                      {isEditing ? (
                        <TextInput
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleEditSave(todo.id)}
                          className="project-todo-list-edit-input flex-1 border border-gray-300 rounded px-3 py-2 shadow-none bg-white text-xl h-full"
                          autoFocus
                          onBlur={() => setEditingId(null)}
                          style={{ height: "40px", fontSize: "1.25rem" }}
                        />
                      ) : (
                        <span
                          className={`project-todo-list-text text-xl font-semibold transition-colors duration-700 ${
                            todo.completed ? "line-through text-stone-500" : "text-stone-900"
                          } ${isFlashed ? "text-stone-400" : ""}`}
                          style={{ lineHeight: "40px" }}
                        >
                          {todo.text}
                        </span>
                      )}
                    </div>
                    {!isEditing && (
                      <button
                        className="project-todo-list-remove-btn absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-0 bg-transparent border-none"
                        aria-label="Delete"
                        onClick={() =>
                          dispatch(
                            removeTodo({
                              projectId: project.id,
                              todoId: todo.id,
                            }),
                          )
                        }
                        tabIndex={-1}
                        type="button"
                      >
                        <CrossIcon
                          className="project-todo-list-remove-icon transition-colors duration-300 text-stone-400 hover:text-red-500"
                          width={32}
                          height={32}
                        />
                      </button>
                    )}
                  </>
                </DraggableTodo>
              );
            })}
          </ul>
        </SortableContext>
      </DndContext>
    </>
  );
};

export default ProjectTodoList;
