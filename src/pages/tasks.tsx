import React from 'react';
import TaskList from '../components/TaskList';
import router from 'next/router';

interface Task {
  id: string;
  title: string;
}

const tasks: Task[] = [
  { id: '8ce1358c-8fb2-4dbb-b75a-276076f45c94', title: 'Конкурс логотипов' },
  { id: '012571bf-24bf-485a-a9d2-d1ef616c11b3', title: 'Конкурс номер 2' },
];

const AllTasksPage: React.FC = () => {
  return <TaskList tasks={tasks} />;
};

export default AllTasksPage;
