import React from "react";
import { useLoadDefault } from "./hooks/useLoadDefaults";
import { PageWrapper } from "./layouts/PageWrapper";
import ConfigureTaskDialog from "./pages/configureTaskDialog/ConfigureTaskDialog";
import { TaskDetailPage } from "./pages/taskDetailPage/TaskDetailPage";
import { TaskListPage } from "./pages/taskListPage/TaskListPage";

const App = () => {
  useLoadDefault();
  return (
    <div style={{ display: "flex" }}>
      <PageWrapper>
        <TaskListPage />
      </PageWrapper>
      <div className="vertical-line"></div>
      <PageWrapper>
        <TaskDetailPage />
      </PageWrapper>
      <ConfigureTaskDialog />
    </div>
  );
};

export default App;
