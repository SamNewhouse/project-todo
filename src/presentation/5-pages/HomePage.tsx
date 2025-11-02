import { NextPage } from "next";
import BaseLayout from "../4-layouts/BaseLayout";
import ProjectForm from "../2-molecules/ProjectForm";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Project } from "../../store/projectsSlice";
import { RootState } from "../../store";

const HomePage: NextPage = () => {
  const projects = useSelector((state: RootState) => state.projects.projects);

  return (
    <BaseLayout className="home">
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="w-full max-w-2xl p-12 bg-white rounded-3xl border border-gray-300 shadow-2xl mb-12">
          <h1 className="mb-8 font-heading text-5xl text-center text-stone-900 font-extrabold drop-shadow">
            Create a New Project
          </h1>
          <p className="mb-8 text-center text-lg text-stone-600 font-medium">
            Name your next big idea and get organized fast!
          </p>
          <ProjectForm />
        </div>

        <section className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center tracking-tight">
            Current Projects
          </h2>
          {projects.length === 0 ? (
            <p className="text-center text-stone-400">No projects yet.</p>
          ) : (
            <ul className="w-full space-y-2">
              {projects.map((project: Project) => (
                <li
                  key={project.id}
                  className="group relative flex items-center justify-between bg-stone-100 rounded-xl px-9 py-6 text-2xl transition-shadow transition-colors duration-300 ease-in-out hover:shadow-xl hover:bg-stone-200 cursor-pointer shadow"
                >
                  <Link
                    href={`/project/${project.id}`}
                    className="flex items-center justify-between w-full h-full"
                    tabIndex={0}
                    style={{ textDecoration: "none" }}
                  >
                    <span
                      className="text-2xl font-semibold flex-1 truncate text-stone-500 group-hover:text-stone-800 transition-colors duration-300 ease-in-out"
                      style={{ lineHeight: "44px" }}
                    >
                      {project.name}
                    </span>
                    <span className="ml-6 inline-flex items-center px-2 py-0.5 rounded-full text-sm font-semibold bg-stone-500 text-white group-hover:bg-blue-700 transition-colors duration-300 ease-in-out">
                      {project.todos.length}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </BaseLayout>
  );
};

export default HomePage;
