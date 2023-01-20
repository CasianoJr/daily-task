import React from "react";
import { DirectionButton } from "./component/DirectionButton";
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
      <DirectionButton direction="left" />
      <PageWrapper>
        <TaskDetailPage />
      </PageWrapper>
      <DirectionButton direction="right" />
      <ConfigureTaskDialog />
    </div>
  );
};

export default App;
