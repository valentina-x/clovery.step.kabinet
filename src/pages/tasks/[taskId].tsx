import axios from 'axios';
import React from 'react';
import { GetServerSidePropsContext } from 'next';
import styles from '../../assets/scss/pages/taskDetail.module.scss';

interface TaskDetailProps {
  task: {
    title: string;
    description: string;
    // Добавьте другие поля задания здесь
  };
}

const TaskDetail: React.FC<TaskDetailProps> = ({ task }) => {
  return (
    <>
      <nav>
        <a href='#task_description'>Описание задания</a>
      </nav>
      <div className={`${styles.bg}`}>
        <h1>{task.title}</h1>
        {/* <p>{task.description}</p> */}
        {/* Вывод файлов */}
      </div>
    </>
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
