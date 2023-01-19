import React from "react";
import { PageWrapper } from "./layouts/PageWrapper";
import { TaskDetailPage } from "./pages/taskDetailPage/TaskDetailPage";
import { TaskListPage } from "./pages/taskListPage/TaskListPage";

const App = () => {
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
