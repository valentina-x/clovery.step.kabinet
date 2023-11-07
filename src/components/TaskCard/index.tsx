import React from 'react';
import Link from 'next/link';

interface Task {
  id: string;
  title: string;
}

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <Link href={`/tasks/${task.id}`}>Подробнее</Link>
    </div>
  );
};

export default TaskCard;
