import React from "react";
import { useLoadDefault } from "./hooks/useLoadDefaults";
import { useMobileQueryPage } from "./hooks/useMobileQueryPage";
import { useUpdateRunning } from "./hooks/useUpdateRunning";
import { ConfigureTaskDialog } from "./pages/ConfigureTaskDialog";
import { TaskDetailPage } from "./pages/TaskDetailPage";
import { TaskListPage } from "./pages/TaskListPage";

const App = () => {
  useLoadDefault();
  useUpdateRunning(5000);
  const priorityPage = useMobileQueryPage();

  return (
    <div style={{ display: "flex" }}>
      <TaskListPage />
      {!priorityPage && <div className="vertical-line" />}
      <TaskDetailPage />
      <ConfigureTaskDialog />
    </div>
  );
};

export default App;
