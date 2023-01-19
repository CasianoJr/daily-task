/// <reference types="vite/client" />

type TaskProps = {
  id: string;
  title: string;
  runningTime: number;
  originalTime: number;
  theme: string;
  timeCreated: number;
  isRunning: boolean;
  timeUpdated: number;
};
