import { NextPage } from "next";
import BaseLayout from "../4-layouts/BaseLayout";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import TodoInput from "../2-molecules/TodoInput";
import ProjectTodoList from "../3-organisms/ProjectTodoList";
import Link from "next/link";
import LeftArrowIcon from "../1-atoms/icons/LeftArrowIcon";

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = useSelector((state: RootState) =>
    state.projects.projects.find((p) => p.id === id),
  );

  if (!project) {
    return (
      <BaseLayout className="project">
        <div className="pt-24 text-center text-2xl font-bold text-stone-700">
          Project not found.
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout className="project">
      <div className="mb-6 px-3 md:px-0">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-200 hover:bg-stone-300 transition-colors shadow font-semibold text-stone-700 text-base"
          tabIndex={0}
        >
          <LeftArrowIcon className="w-5 h-5 text-stone-700" width={20} height={20} />
          <span className="block md:inline text-base md:text-base">Back to Home</span>
        </Link>
      </div>
      <h1 className="mb-10 text-4xl md:text-5xl md:text-6xl font-heading font-extrabold text-stone-900 px-3 md:px-0 text-left">
        {project.name}
      </h1>
      <div className="w-full max-w-full md:max-w-5xl mx-auto px-3 md:px-0">
        <TodoInput projectId={project.id} />
        <div className="mt-8 md:mt-10">
          <ProjectTodoList project={project} />
        </div>
      </div>
    </BaseLayout>
  );
};

export default ProjectPage;
