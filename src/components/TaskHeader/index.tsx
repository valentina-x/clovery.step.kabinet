import React from 'react';
import TaskHeaderStyles from './style.module.scss';
import CloseSVG from '../../../public/images/svg/s_chevron-left.svg';

const TaskHeader: React.FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className={`${TaskHeaderStyles.header} ${TaskHeaderStyles.header_shadow}`}>
      <button className={`${TaskHeaderStyles.close}`} type='button' onClick={handleGoBack}>
        <CloseSVG /> Вернуться к списку заданий
      </button>
      <nav className={`${TaskHeaderStyles.nav}`}>
        <a href='#task_description' className={`${TaskHeaderStyles.nav__link}`}>
          Описание задания
        </a>
        <a href='#completed_work' className={`${TaskHeaderStyles.nav__link}`}>
          Решение
        </a>
        <a href='#points_awards' className={`${TaskHeaderStyles.nav__link}`}>
          Награды
        </a>
      </nav>
    </div>
  );
};

export { TaskHeaderStyles };
export default TaskHeader;
