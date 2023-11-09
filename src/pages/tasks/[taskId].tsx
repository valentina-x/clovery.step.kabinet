import axios from 'axios';
import React from 'react';
import { GetServerSidePropsContext } from 'next';
import platformStyles from '../../assets/scss/pages/_app.module.scss';
import TaskInfo from '../../components/TaskInfo';
import SendCompletedWork from '../../components/SendCompletedWork';
import PointsAndAwards from '../../components/PointsAndAwards';
import TaskHeader from '../../components/TaskHeader';

interface TaskDetailProps {
  task: {
    title: string;
    description: string;
  };
}

const TaskDetail: React.FC<TaskDetailProps> = ({ task }) => {
  return (
    <div className={`${platformStyles.platform__outer}`}>
      <TaskHeader />
      <div className={`${platformStyles.platform__wrapper}`}>
        <TaskInfo />
        <SendCompletedWork />
        <PointsAndAwards />
      </div>
    </div>
  );
};

export default TaskDetail;

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const { taskId } = params as { taskId: string };

  // Заглушка данных
  const tasks = [
    { id: '8ce1358c-8fb2-4dbb-b75a-276076f45c94', title: 'Конкурс логотипов' },
    { id: '012571bf-24bf-485a-a9d2-d1ef616c11b3', title: 'Конкурс номер 2' },
  ];

  const task = tasks.find((task) => task.id === String(taskId));

  return {
    props: {
      task,
    },
  };
}

// export async function getServerSideProps({ params }: GetServerSidePropsContext) {
//   const { taskId } = params as { taskId: string };

//   try {
//     const response = await axios.get(`https://api.example.com/tasks/${taskId}`);
//     const task = response.data;

//     return {
//       props: {
//         task,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching task:', error);
//     return {
//       notFound: true,
//     };
//   }
// }
