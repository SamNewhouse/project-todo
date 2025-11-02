# Next.js Redux Todo Projects App

This is a productivity tool for managing projects and todos using your custom Next.js boilerplate.  

It’s built with atomic design principles for maximum reusability and clarity.

---

## 🚀 Main Features

- Create and manage multiple projects
- Add, edit, complete, and reorder todos (with drag-and-drop)
- Instant UI updates and local data persistence
- Modern, fully responsive UI (Tailwind CSS)
- Accessible by keyboard and on mobile/desktop

---
## 🏗️ Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [@dnd-kit/core](https://dndkit.com/)
- [Tailwind CSS](https://tailwindcss.com/)


---

## ⚡ Features

- Create, rename, and open projects
- Add, complete, edit, delete, and reorder todos in each project
- Real-time drag-and-drop reordering
- Beautiful transitions and hover effects
- Fully responsive for desktop and mobile
- Accessible keyboard navigation
- Data is persistent locally

---

## 📁 Project Folder Structure (Main SRC Folders)

```
src
├── pages                # Next.js route files & API routes
│   ├── api              # API endpoints (e.g. for serverless functions)
│   └── project          # Dynamic project page routes
├── presentation         # Main UI components, structured by atomic design
│   ├── 1-atoms          # Fundamental UI elements (buttons, inputs, icons)
│   │   └── icons        # Icon components (SVGs, etc.)
│   ├── 2-molecules      # Small composed components (forms, draggable todos, etc.)
│   ├── 3-organisms      # Larger reusable UI blocks (todo lists, panels, etc.)
│   ├── 4-layouts        # Layout components for page wrappers
│   └── 5-pages          # Page-level components mapping to app routes
├── store                # Redux store logic and slices
└── styles               # Global CSS and Tailwind configuration
```

---

## 🛠️ Getting Started

1. Clone the repo:  
   `git clone https://github.com/yourusername/nextjs-redux-todo-projects.git`
2. Install dependencies:  
   `npm install`
3. Run the app:  
   `npm run dev` (view at [http://localhost:3000](http://localhost:3000))

---

## 📣 Contributing

PRs and suggestions welcome!

---

## 📄 License

MIT — use freely!
