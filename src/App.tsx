import React from "react";
import { useLoadDefault } from "./hooks/useLoadDefaults";
import { PageWrapper } from "./layouts/PageWrapper";
import { TaskDetailPage } from "./pages/taskDetailPage/TaskDetailPage";
import { TaskListPage } from "./pages/taskListPage/TaskListPage";

const App = () => {
  useLoadDefault();
  return (
    <div style={{ display: "flex" }}>
      <PageWrapper>
        <TaskListPage />
      </PageWrapper>
      <PageWrapper>
        <TaskDetailPage />
      </PageWrapper>
    </div>
  );
};

export default App;
