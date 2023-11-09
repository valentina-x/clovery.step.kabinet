import React from 'react';
import SendCompletedWorkStyles from './style.module.scss';
import ButtonStyles from '../Button/style.module.scss';

const SendCompletedWork: React.FC = () => {
  return (
    <div
      className={`${SendCompletedWorkStyles.sendcomplitedwork} ${SendCompletedWorkStyles.sendcomplitedwork_mode}`}
    >
      <div className={`${SendCompletedWorkStyles.sendcomplitedwork__title}`}>Отправка решения</div>
      <div className={`${SendCompletedWorkStyles.sendcomplitedwork__text}`}>
        Отправьте своё решение на почту{' '}
        <a href='mailto:step@cloveri.org' target='_blank'>
          step@cloveri.org
        </a>
        . Для этого нажмите на кнопку ниже. В теме письма укажите название конкурса.
      </div>
      <a
        href='mailto:step@clovery.org'
        className={`${ButtonStyles.button} ${ButtonStyles.button_purple}`}
      >
        Отправить решение
      </a>
    </div>
  );
};

export { SendCompletedWorkStyles };
export default SendCompletedWork;
