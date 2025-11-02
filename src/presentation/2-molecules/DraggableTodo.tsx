import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { Todo } from "../../store/projectsSlice";

export interface DraggableTodoProps {
  todo: Todo;
  isEditing: boolean;
  isFlashed: boolean;
  children: React.ReactNode;
  onDoubleClick?: React.MouseEventHandler<HTMLLIElement>;
  disabled?: boolean; // <- NEW
}

const DraggableTodo: React.FC<DraggableTodoProps> = ({
  todo,
  isEditing,
  isFlashed,
  children,
  onDoubleClick,
  disabled = false,
}) => {
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: todo.id,
    disabled,
  });

  return (
    <li
      ref={setNodeRef}
      {...attributes}
      {...(!disabled ? listeners : {})}
      className={`
        group relative flex items-center justify-between bg-stone-200 rounded-xl px-7 py-10 h-16 text-xl transition-shadow hover:shadow-md
        ${todo.completed ? "opacity-80" : ""}
        ${isEditing ? "cursor-default hover:cursor-default" : "cursor-pointer hover:cursor-default"}
        ${isFlashed ? "shadow-lg" : ""}
        ${isDragging ? "ring-2 ring-blue-400 z-10" : ""}
      `}
      style={{
        minHeight: "64px",
        transition: "box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)",
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        zIndex: isDragging ? 10 : "auto",
        boxShadow: isDragging ? "0 12px 35px #35353555" : undefined,
      }}
      onDoubleClick={onDoubleClick}
    >
      {children}
    </li>
  );
};

export default DraggableTodo;
