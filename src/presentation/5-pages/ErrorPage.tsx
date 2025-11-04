import type { NextPage } from "next";
import BaseLayout from "../4-layouts/BaseLayout";

const ErrorPage: NextPage = () => {
  return (
    <>
      <BaseLayout className="error-page">
        <div className="error-page-center flex justify-center items-center h-screen">
          <div className="error-page-content flex flex-col w-100 max-w-md space-y-3">
            <h1 className="error-page-title font-serif text-8xl">404</h1>
            <h2 className="error-page-subtitle font-sans text-2xl">Page not found</h2>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default ErrorPage;
