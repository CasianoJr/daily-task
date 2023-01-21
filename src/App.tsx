import React from "react";
import { DirectionButton } from "./component/DirectionButton";
import { useLoadDefault } from "./hooks/useLoadDefaults";
import { useMobileQueryPage } from "./hooks/useMobileQueryPage";
import { useUpdateRunning } from "./hooks/useUpdateRunning";
import { PageWrapper } from "./layouts/PageWrapper";
import ConfigureTaskDialog from "./pages/configureTaskDialog/ConfigureTaskDialog";
import { TaskDetailPage } from "./pages/taskDetailPage/TaskDetailPage";
import { TaskListPage } from "./pages/taskListPage/TaskListPage";

const App = () => {
  useLoadDefault();
  useUpdateRunning(5000);
  const priorityPage = useMobileQueryPage();
  return (
    <div style={{ display: "flex" }}>
      {priorityPage !== "detailPage" && (
        <PageWrapper>
          <TaskListPage />
        </PageWrapper>
      )}
      {!priorityPage && <div className="vertical-line"></div>}
      {priorityPage !== "listPage" && (
        <>
          <DirectionButton direction="left" />
          <PageWrapper>
            <TaskDetailPage />
          </PageWrapper>
          <DirectionButton direction="right" />
        </>
      )}
      <ConfigureTaskDialog />
    </div>
  );
};

export default App;
