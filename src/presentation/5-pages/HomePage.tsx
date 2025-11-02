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
      <div className="flex min-h-screen flex-col items-center bg-gray-100 px-2 sm:pt-8">
        <div className="w-full mt-2 p-8 bg-white rounded-3xl border border-gray-300 shadow-2xl mb-10 sm:max-w-2xl sm:p-12 sm:mb-12">
          <h1 className="mb-6 sm:mb-10 text-4xl text-center text-stone-900 font-heading font-extrabold drop-shadow sm:text-5xl sm:mb-8">
            Create a New Project
          </h1>
          <p className="mb-10 text-xl text-center text-stone-600 font-medium sm:text-lg sm:mb-8">
            Start your ideas. Stay organized.
          </p>
          <ProjectForm />
        </div>
        <section className="w-full sm:max-w-2xl mt-2">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center tracking-tight sm:text-2xl sm:mb-6">
            Current Projects
          </h2>
          {projects.length === 0 ? (
            <p className="text-center text-stone-400 text-xl sm:text-base">No projects yet.</p>
          ) : (
            <ul className="w-full space-y-3 sm:space-y-4">
              {projects.map((project: Project) => (
                <li
                  key={project.id}
                  className="group relative flex items-center justify-between bg-stone-200 rounded-xl px-5 py-5 text-lg transition-shadow hover:shadow-md sm:px-7 sm:text-xl"
                >
                  <Link
                    href={`/project/${project.id}`}
                    className="flex items-center justify-between w-full h-full"
                    tabIndex={0}
                    style={{ textDecoration: "none" }}
                  >
                    <span
                      className="font-semibold flex-1 truncate text-stone-700 sm:text-stone-500 group-hover:text-stone-800 transition-colors duration-300 ease-in-out text-xl sm:text-2xl"
                      style={{ lineHeight: "44px" }}
                    >
                      {project.name}
                    </span>
                    <span className="ml-5 inline-flex items-center justify-center rounded-full bg-stone-500 text-white font-semibold text-md w-7 h-7 group-hover:bg-blue-700 transition-colors duration-300 ease-in-out sm:ml-6 sm:w-8 sm:h-8 sm:text-xl px-0 py-0">
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
