import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type Project = {
  id: string;
  name: string;
  todos: Todo[];
};

interface ProjectsState {
  projects: Project[];
}

// Initial state
const initialState: ProjectsState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<{ id: string; name: string }>) => {
      console.log("Adding project:", action.payload);
      state.projects.push({ ...action.payload, todos: [] });
    },
    addTodo: (state, action: PayloadAction<{ projectId: string; todo: Todo }>) => {
      console.log("Adding todo to project:", action.payload.projectId, action.payload.todo);
      const project = state.projects.find((p) => p.id === action.payload.projectId);
      if (project) {
        project.todos.push(action.payload.todo);
      }
    },
    toggleTodo: (state, action: PayloadAction<{ projectId: string; todoId: string }>) => {
      console.log("Toggling todo:", action.payload);
      const project = state.projects.find((p) => p.id === action.payload.projectId);
      if (project) {
        const todo = project.todos.find((t) => t.id === action.payload.todoId);
        if (todo) {
          todo.completed = !todo.completed;
        }
      }
    },
    reorderTodos: (
      state,
      action: PayloadAction<{
        projectId: string;
        todos: Todo[];
      }>,
    ) => {
      console.log("Reordering todos for project:", action.payload.projectId, action.payload.todos);
      const { projectId, todos } = action.payload;
      const project = state.projects.find((p) => p.id === projectId);
      if (project) {
        project.todos = todos;
      }
    },
    removeTodo: (state, action: PayloadAction<{ projectId: string; todoId: string }>) => {
      console.log("Removing todo:", action.payload);
      const project = state.projects.find((p) => p.id === action.payload.projectId);
      if (project) {
        project.todos = project.todos.filter((t) => t.id !== action.payload.todoId);
      }
    },
    editTodo: (
      state,
      action: PayloadAction<{
        projectId: string;
        todoId: string;
        newText: string;
      }>,
    ) => {
      console.log("Editing todo:", action.payload);
      const project = state.projects.find((p) => p.id === action.payload.projectId);
      if (project) {
        const todo = project.todos.find((t) => t.id === action.payload.todoId);
        if (todo) {
          todo.text = action.payload.newText;
        }
      }
    },
  },
});

// Export actions and reducer
export const { addProject, addTodo, toggleTodo, reorderTodos, removeTodo, editTodo } =
  projectsSlice.actions;
export default projectsSlice.reducer;
