"use client";

import { NextPage } from "next";
import BaseLayout from "../4-layouts/BaseLayout";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import TodoInput from "../2-molecules/TodoInput";
import ProjectTodoList from "../3-organisms/ProjectTodoList";
import Link from "next/link";
import LeftArrowIcon from "../1-atoms/icons/LeftArrowIcon";

const ProjectPage: NextPage = () => {
  const params = useParams();
  const id = params.id;

  const project = useSelector((state: RootState) =>
    state.projects.projects.find((p) => p.id === id),
  );

  if (!project) {
    return (
      <BaseLayout className="project-page">
        <div className="project-page-not-found pt-24 text-center text-2xl font-bold text-stone-700">
          Project not found.
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout className="project-page">
      <div className="project-page-back-btn-container mb-6 px-3 md:px-0">
        <Link
          href="/"
          className="project-page-back-btn inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-200 hover:bg-stone-300 transition-colors shadow font-semibold text-stone-700 text-base"
          tabIndex={0}
        >
          <LeftArrowIcon
            className="project-page-back-icon w-5 h-5 text-stone-700"
            width={20}
            height={20}
          />
          <span className="project-page-back-label block md:inline text-base md:text-base">
            Back to Home
          </span>
        </Link>
      </div>
      <h1 className="project-page-title mb-10 text-4xl md:text-5xl md:text-6xl font-heading font-extrabold text-stone-900 px-3 md:px-0 text-left">
        {project.name}
      </h1>
      <div className="project-page-content w-full max-w-full md:max-w-5xl mx-auto px-3 md:px-0">
        <TodoInput projectId={project.id} />
        <div className="project-page-todo-list-wrapper mt-8 md:mt-10">
          <ProjectTodoList project={project} />
        </div>
      </div>
    </BaseLayout>
  );
};

export default ProjectPage;
