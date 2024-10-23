export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export const TaskStatusOptions: {value: string, taskStatus: TaskStatus, text: string}[] = [
  {
    value: 'open',
    taskStatus: 'OPEN',
    text: 'Open',
  },
  {
    value: 'in-progress',
    taskStatus: 'IN_PROGRESS',
    text: 'In-progress',
  },
  {
    value: 'done',
    taskStatus: 'DONE',
    text: 'Completed',
  },
];

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
