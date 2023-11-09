import React from 'react';
import TaskHeaderStyles from './style.module.scss';
import CloseSVG from '../../../public/images/svg/s_chevron-left.svg';

const TaskHeader: React.FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.getElementById(targetId!.substring(1));

    console.log('targetId', targetId);
    console.log('targetElement', targetElement);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });

      targetElement.classList.add(`${TaskHeaderStyles.highlight}`);

      setTimeout(() => {
        targetElement.classList.remove(`${TaskHeaderStyles.highlight}`);
      }, 1000);
    }
  };

  return (
    <div className={`${TaskHeaderStyles.header} ${TaskHeaderStyles.header_shadow}`}>
      <div className={`${TaskHeaderStyles.header__wrapper}`}>
        <button className={`${TaskHeaderStyles.close}`} type='button' onClick={handleGoBack}>
          <CloseSVG /> Вернуться к списку заданий
        </button>
        <nav className={`${TaskHeaderStyles.nav}`}>
          <a
            href='#task_description'
            className={`${TaskHeaderStyles.nav__link}`}
            onClick={handleNavLinkClick}
          >
            Описание задания
          </a>
          <a
            href='#completed_work'
            className={`${TaskHeaderStyles.nav__link}`}
            onClick={handleNavLinkClick}
          >
            Решение
          </a>
          <a
            href='#points_awards'
            className={`${TaskHeaderStyles.nav__link}`}
            onClick={handleNavLinkClick}
          >
            Награды
          </a>
        </nav>
      </div>
    </div>
  );
};

export { TaskHeaderStyles };
export default TaskHeader;
